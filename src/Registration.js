import React, { Component } from 'react';
import {
  Header
} from 'semantic-ui-react';

class Registration extends Component {
  render() {
    return (
      <div>
        <Header as='h2'>Registration Details</Header>
        <Header as='h3'>Details</Header>
        <p>
          You may register online <a href='https://g2racereg.webconnex.com/gobbler5k2017'>HERE</a>
        </p>
        <p>
          Online registration closes Monday night November 20, 2017 6:00 P.M.
        </p>
        <p>
          Registration will be limited to the first 1,000 entrants. The last two years have SOLD OUT!
        </p>
        <p>
          If the race has not sold out you may sign up on the day of the race up until 7:30 A.M.
        </p>
        <Header as='h3'>Cost</Header>
        <p>
          Registration for the race will open on September 1,  2017.
        </p>
        <p>
          For all entries received by November 13, 2017:
        </p>
        <p>
          $20.00 Adults (18 and older)
          <br />
          $15.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registrations received after November 13, 2017:
        </p>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
      </div>
    )
  }
}

export default Registration;
