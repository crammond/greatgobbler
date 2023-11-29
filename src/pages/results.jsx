import React from 'react';
import Layout from '../components/layout';

const gobblers = [
  {year: 2023, url: 'https://raceday.enmotive.com/#/events/2023-great-gobbler-5k/results'},
  {year: 2022, url: 'https://www.secondwindtiming.com/result-page/?id=227072'},
  {year: 2021, url: 'https://www.secondwindtiming.com/result-page/?id=187241'},
  {year: 2020, url: 'https://runsignup.com/Race/Results/99251#resultSetId-215368;perpage:100'},
  {year: 2019, url: 'https://www.3craceproductions.com/raceresults.php?raceId=2146&type=LINKS0'},
  {year: 2018, url: 'http://3craceproductions.com/raceresults.php?raceId=2025&type=LINKS0', wayback: 'https://web.archive.org/web/20190403145618/http://www.coolrunning.com/results/17/nh/Nov23_GreatG_set1.shtml'},
  {year: 2017, url: 'http://www.coolrunning.com/results/17/nh/Nov23_GreatG_set1.shtml'},
  {year: 2016, url: 'http://www.coolrunning.com/results/16/nh/Nov24_GreatG_set1.shtml', unavailable: true},
  {year: 2015, url: 'http://www.coolrunning.com/results/15/nh/Nov26_GreatG_set1.shtml', unavailable: true},
  {year: 2014, url: 'http://www.coolrunning.com/results/14/nh/Nov27_GreatG_set1.shtml', wayback: 'https://web.archive.org/web/20191026172641/http://www.coolrunning.com/results/14/nh/Nov27_GreatG_set1.shtml'},
  {year: 2013, url: 'http://www.coolrunning.com/results/13/nh/Nov28_GreatG_1_set1.shtml', wayback: 'https://web.archive.org/web/20150428045407/http://www.coolrunning.com/results/13/nh/Nov28_GreatG_1_set1.shtml'},
  {year: 2012, url: 'http://www.millenniumrunning.com/results-great-gobbler-thanksgiving-5k-2012/4636'},
  {year: 2011, url: 'http://www.coolrunning.com/results/11/nh/Nov24_GreatG_set1.shtml', unavailable: true},
  {year: 2010, url: 'http://www.coolrunning.com/results/10/nh/Nov25_GreatG_set1.shtml', wayback: 'https://web.archive.org/web/20120125041455/http://www.coolrunning.com/results/10/nh/Nov25_GreatG_set1.shtml'},
  {year: 2009, url: 'http://www.coolrunning.com/results/09/nh/Nov26_GreatG_set1.shtml', wayback: 'https://web.archive.org/web/20101024203943/http://www.coolrunning.com/results/09/nh/Nov26_GreatG_set1.shtml'},
  {year: 2008, url: 'http://www.coolrunning.com/results/08/nh/Nov27_StJose_set1.shtml', wayback: 'https://web.archive.org/web/20100210202347/http://coolrunning.com/results/08/nh/Nov27_StJose_set1.shtml'},
  {year: 2007, url: 'http://www.coolrunning.com/results/07/nh/Nov22_StJose_set1.shtml', wayback: 'https://web.archive.org/web/20101024205557/http://www.coolrunning.com/results/07/nh/Nov22_StJose_set1.shtml'},
  {year: 2006, url: 'http://www.coolrunning.com/results/06/nh/Nov23_StJose_set1.shtml', wayback: 'https://web.archive.org/web/20100210000850/http://coolrunning.com/results/06/nh/Nov23_StJose_set1.shtml'}
]

const alumnis = [
  {year: 2005, url: 'http://www.coolrunning.com/results/05/nh/Nov24_Nashua_set1.shtml', wayback: 'https://web.archive.org/web/20100210083556/http://coolrunning.com/results/05/nh/Nov24_Nashua_set1.shtml'},
  {year: 2004, url: 'http://www.coolrunning.com/results/04/nh/Nov25_Nashua_set1.shtml', wayback: 'https://web.archive.org/web/20100209075214/http://coolrunning.com/results/04/nh/Nov25_Nashua_set1.shtml'},
  {year: 2003, url: 'http://www.coolrunning.com/results/03/nh/Nov27_Nashua_set1.shtml', wayback: 'https://web.archive.org/web/20100204122724/http://www.coolrunning.com/results/03/nh/Nov27_Nashua_set1.shtml'}
]

function resultsToListItems(results) {
  return results.map(({ year, url, wayback, unavailable }) => {
    const mappedYear = unavailable ?
      <span title={`Results for ${year} are currently unavailable`}>{year}</span> 
      : <a href={wayback || url} target="_blank" rel="noreferrer noopener">{year}</a>
    return <li key={year}>{mappedYear}</li>
  });
}

const Results = () => (
  <Layout title="Results">
    <h2>Results</h2>
    <h3>Past Results:</h3>
    <ul>
      {resultsToListItems(gobblers)}
    </ul>
    <h3>When the race was the Nashua High Alumni Race:</h3>
    <ul>
      {resultsToListItems(alumnis)}
    </ul>
  </Layout>
)

export default Results;
