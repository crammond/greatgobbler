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
          Every year we collect food for the Nashua Food Bank. There will be a table set up inside the Nashua South Cafeteria on Wednesday, November 22 from 3:00-6:00 P.M. during bib pick-up as well as a table near the Nashua South track on race day.
        </p>
      </Container>
    )
  }
}

export default FoodDonations;
