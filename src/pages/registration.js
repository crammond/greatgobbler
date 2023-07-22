import React, { Component } from 'react';

import Layout from '../components/layout';

class Registration extends Component {
  render() {
    return (
      <Layout title="Registration">
        <h2>Registration Details</h2>
        <h3>Details</h3>
        <p>
          Registration is now open! <a href='https://greatgobbler.enmotive.com/events/2023-great-gobbler-5k' target='_blank' rel="noopener noreferrer">here</a>.
          Online registration closes when we reach capacity. If there are still spots available, in-person registration will take place on Wednesday, November 22nd in the Nashua South cafeteria from 10:00am to 5:00pm AND race day morning at Nashua South until 7:30am.
        </p>
        <h3>Cost</h3>
        <p>
        EARLY BIRD PRICING NOW AVAILBLE THROUGH AUGUST 31ST
          <br />
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Regular pricing September 1st - November 22nd
          <br />
          $30.00 Adults (18 and older)
          <br />
          $25.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registration on race day will cost $35.00 for Adults and $30.00 for Youth
        </p>
      </Layout>
    )
  }
}

export default Registration;
