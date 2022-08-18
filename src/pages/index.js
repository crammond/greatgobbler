import React from 'react';

import Layout from '../components/layout';

const Index = () => (
	<Layout title="Home">
		<div id="home">
			<div>
				<p style={{ color: "red", fontWeight: "bold", fontSize: "2.5rem", margin: 0 }}>
					Join us for the 20th annual Great Gobbler! The kid’s fun run will begin at 7:30am, followed by the 5K at 8:00am.
				</p>
				<h2>A Nashua Community Thanksgiving Tradition</h2>
				<p>Warm up your Thanksgiving appetite at Nashua High School South at the 20th Annual Great Gobbler 5K! The Great Gobbler 5K brings together family, friends, Nashua High School cross country alumni as well as the Greater Nashua area community to start the day in a healthy way.  Join runners, joggers and walkers for a morning of fun in support of the Nashua North and South Boys and Girls Cross Country Programs.</p>
				<p>Online registration link coming soon!</p>
			</div>
			<a className="register-button" href='https://runsignup.com/Race/NH/Nashua/GreatGobbler5k' target='_blank' rel="noopener noreferrer">REGISTER</a>
		</div>
	</Layout>
);

export default Index;