import React, { Component } from 'react';

import Layout from '../components/layout';

class Registration extends Component {
  render() {
    return (
      <Layout title="Registration">
        <h2>Registration Details</h2>
        <h3>Details</h3>
        <p>
          You may register online <a href='https://runsignup.com/Race/NH/Nashua/GreatGobbler5k' target="_blank" rel="noopener noreferrer">HERE</a>
        </p>
        <p>
          Online registration closes on Monday, November 20th 2022 at 11:59 P.M. If there are still spots available, in-person registration will take place on Wednesday, November 23rd in the Nashua South cafeteria from 10:00am to 5:00pm AND race day morning at Nashua South until 7:30am.
        </p>
        <h3>Cost</h3>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registration on race day will cost $30.00 for Adults and $25.00 for Youth
        </p>
      </Layout>
    )
  }
}

export default Registration;
