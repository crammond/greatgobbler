import React, { Component } from 'react';

import Layout from '../components/layout';

class FoodDonations extends Component {
  render() {
    return (
      <Layout title="Food Donations">
        <h2>Food Donations</h2>
        <p>Unfortunately we are unable to accept donations of canned goods this year. Please check back next year!</p>
        {/* <p>
          Every year we collect food for the Nashua Food Bank. There will be a table set up at Fleet Feet on Wednesday, November 25, 2020 from 10:30 A.M. to 5:00 P.M. during bib pick-up as well as a table in the Nashua South Cafeteria on race day.
        </p> */}
      </Layout>
    )
  }
}

export default FoodDonations;
