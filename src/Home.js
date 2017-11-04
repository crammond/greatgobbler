import React, { Component } from 'react';
import {
  Header,
  Grid,
  Button
} from 'semantic-ui-react';
import FacebookPageWrapper from './FacebookPageWrapper'

class Home extends Component {
  render() {
    return (
      <Grid reversed='mobile' stackable>
        <Grid.Column width={9}>
          <Header textAlign='center' as='h2'>
            A Nashua Community Thanksgiving Tradition
          </Header>
          <p>
            Warm up your Thanksgiving appetite at Nashua High School South at the 15th Annual Great Gobbler 5K! The Great Gobbler 5K brings together family, friends, Nashua High School cross country alumni as well as the Greater Nashua area community to start the day in a healthy way.  Join runners, joggers and walkers for a morning of fun in support of the Nashua North and South Boys and Girls Cross Country Programs.
          </p>
        </Grid.Column>
        <Grid as={Grid.Column} textAlign='center' width={7} stackable>
          <Grid.Column width={16}>
            <Button
              content='REGISTER'
              primary
              style={{margin: 0}}
              size='massive'
              as='a'
              href='https://g2racereg.webconnex.com/gobbler5k2017'
            />
          </Grid.Column>
          <Grid.Column width={16}>
            <FacebookPageWrapper />
          </Grid.Column>
        </Grid>
      </Grid>
    )
  }
}

export default Home;
