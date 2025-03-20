import fs from 'node:fs';
import { scheduler } from 'node:timers/promises';

const leaderboardsUrl = 'https://api.enmotive.grepcv.com/prod/events/b1092b6e-2aa9-4204-970a-eb648ffd73a3/leaderboards'

const leaderboardsResponse = await fetch(leaderboardsUrl);

const leaderboards = await leaderboardsResponse.json();

const bracketNamesAndIds = JSON.parse(leaderboards.body).categories
	.map(category => category.brackets
		.map(({ name, id }) => ([ name, id ])))
			.flat();

console.log(bracketNamesAndIds);

for (const [ name, id ] of bracketNamesAndIds) {
	const bracketDir = `${import.meta.dirname}/${name}`;
	try {
		if (!fs.existsSync(bracketDir)) {
			console.log('Creating dir', bracketDir)
			fs.mkdirSync(bracketDir);
		}
		let foundLastPage = false;
		let page = 1;
		while (!foundLastPage) {
			console.log(`Requesting page ${page} for bracket ${name}`)
			await scheduler.wait(100); // Don't ddos
			const pageResponse = await fetch(`${leaderboardsUrl}?bracket_id=${id}&page=${page}`);
			const pageText = await pageResponse.text();
			if (JSON.parse(pageText).body === '[]') {
				foundLastPage = true;
			} else {
				fs.writeFileSync(`${bracketDir}/page${page}.json`, pageText);
				page++;
			}
		}
	} catch (err) {
		console.error(err);
	}
}