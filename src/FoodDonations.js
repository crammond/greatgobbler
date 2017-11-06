import React, { Component } from 'react';
import {
  Header,
  Container
} from 'semantic-ui-react';

class FoodDonations extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2' content='Food Donations' />
        <p>
          Every year we collect food for the Nashua Food Bank. There will be a table set up at Fleet Feet on Wednesday, November 22 from 10:30 a.m. to 4 p.m. during bib pick-up as well as a table in the Nashua South Cafeteria on race day.
        </p>
      </Container>
    )
  }
}

export default FoodDonations;
