import React, { Component } from 'react';
import {
  Header,
  List,
  Container
} from 'semantic-ui-react';

const gobblers = [
  {year: 2018, url: 'http://3craceproductions.com/raceresults.php?raceId=2025&type=LINKS0'},
  {year: 2017, url: 'http://www.coolrunning.com/results/17/nh/Nov23_GreatG_set1.shtml'},
  {year: 2016, url: 'http://www.coolrunning.com/results/16/nh/Nov24_GreatG_set1.shtml'},
  {year: 2015, url: 'http://www.coolrunning.com/results/15/nh/Nov26_GreatG_set1.shtml'},
  {year: 2014, url: 'http://www.coolrunning.com/results/14/nh/Nov27_GreatG_set1.shtml'},
  {year: 2013, url: 'http://www.coolrunning.com/results/13/nh/Nov28_GreatG_1_set1.shtml'},
  {year: 2012, url: 'http://www.millenniumrunning.com/results-great-gobbler-thanksgiving-5k-2012/4636'},
  {year: 2011, url: 'http://www.coolrunning.com/results/11/nh/Nov24_GreatG_set1.shtml'},
  {year: 2010, url: 'http://www.coolrunning.com/results/10/nh/Nov25_GreatG_set1.shtml'},
  {year: 2009, url: 'http://www.coolrunning.com/results/09/nh/Nov26_GreatG_set1.shtml'},
  {year: 2008, url: 'http://www.coolrunning.com/results/08/nh/Nov27_StJose_set1.shtml'},
  {year: 2007, url: 'http://www.coolrunning.com/results/07/nh/Nov22_StJose_set1.shtml'},
  {year: 2006, url: 'http://www.coolrunning.com/results/06/nh/Nov23_StJose_set1.shtml'}
]

const alumnis = [
  {year: 2005, url: 'http://www.coolrunning.com/results/05/nh/Nov24_Nashua_set1.shtml'},
  {year: 2004, url: 'http://www.coolrunning.com/results/04/nh/Nov25_Nashua_set1.shtml'},
  {year: 2003, url: 'http://www.coolrunning.com/results/03/nh/Nov27_Nashua_set1.shtml'}
]

const resultsToListItems = (results) => {
  return results.map(result => {return <List.Item key={result.year} content={result.year} href={result.url} />})
}

class Results extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2' content='Results' />
        <Header as='h3' content='Past Results:' />
        <List bulleted items={resultsToListItems(gobblers)} />
        <Header as='h3' content='When the race was the Nashua High Alumni Race:' />
        <List bulleted items={resultsToListItems(alumnis)} />
      </Container>
    )
  }
}

export default Results;
