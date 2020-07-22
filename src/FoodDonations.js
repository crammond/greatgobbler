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
          Every year we collect food for the Nashua Food Bank. There will be a table set up at Fleet Feet on Wednesday, November 25, 2020 from 10:30 A.M. to 5:00 P.M. during bib pick-up as well as a table in the Nashua South Cafeteria on race day.
        </p>
      </Container>
    )
  }
}

export default FoodDonations;
