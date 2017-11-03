import React, { Component } from 'react';
import {
  Header,
  Grid
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10} >
          <Header textAlign='center' as='h2'>
            A Nashua Community Thanksgiving Tradition
          </Header>
          <p>
            Warm up your Thanksgiving appetite at Nashua High School South at the 15th Annual Great Gobbler 5K! The Great Gobbler 5K brings together family, friends, Nashua High School cross country alumni as well as the Greater Nashua area community to start the day in a healthy way.  Join runners, joggers and walkers for a morning of fun in support of the Nashua North and South Boys and Girls Cross Country Programs.
          </p>
        </Grid.Column>
        <Grid.Column width={6} >
          <Header textAlign='center' as='h2'>
            <a href='https://g2racereg.webconnex.com/gobbler5k2017'>REGISTER</a>
          </Header>
          <a className="twitter-timeline" href="https://twitter.com/GreatGobbler?ref_src=twsrc%5Etfw">Tweets by GreatGobbler</a>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;
