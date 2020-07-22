import React, { Component } from 'react';

class Registration extends Component {
  render() {
    return (
      <div>
        <h2>Registration Details</h2>
        <h3>Details</h3>
        <p>
          You may register online <a href='https://g2racereg.webconnex.com/gobbler5k2019' target="_blank" rel="noopener noreferrer">HERE</a>
        </p>
        <p>
          Online registration closes Monday night November 23, 2020 6:00 P.M.
        </p>
        <p>
          Registration will be limited to the first 1,500 entrants. The last two years have SOLD OUT!
        </p>
        {/* <p>
          Due to increased number of registrants this year, there will be no race day registrations.
        </p> */}
        <h3>Cost</h3>
        <p>
          Registration for the race will open on September 1, 2020.
        </p>
        <p>
          For all entries received by November 16, 2020:
        </p>
        <p>
          $20.00 Adults (18 and older)
          <br />
          $15.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registrations received after November 16, 2020:
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
