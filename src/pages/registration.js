import React, { Component } from 'react';

import Layout from '../components/layout';

class Registration extends Component {
  render() {
    return (
      <Layout title="Registration">
        <h2>Registration Details</h2>
        <h3>Details</h3>
        <p>
          A registration link will be available here and on the home page soon.
          {/* You may register online <a href='https://runsignup.com/Race/NH/Nashua/18thAnnualGreatGobblerThanksgivingDayVirtual5k' target="_blank" rel="noopener noreferrer">HERE</a> */}
        </p>
        <p>
          Online registration closes on Monday, November 22nd 2021 at 11:59 P.M. If there are still spots available, in-person registration will take place on Wednesday, November 24th at Fleet Feet Sports in Nashua from 10:00am to 5:00pm AND race day morning at Nashua South until 7:30am.
        </p>
        <h3>Cost</h3>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
      </Layout>
    )
  }
}

export default Registration;
