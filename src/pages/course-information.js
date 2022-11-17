import React, { Component } from 'react';

import Layout from '../components/layout';

import courseMap from "../images/GobblerMap.png"

class CourseInformation extends Component {
  render() {
    return (
        <Layout title="Course Information">
          <h2>Course Information</h2>
          <p>
            The course begins and runs down Riverside Street, then takes a right after Conway Arena toward Stellos Stadium.
            Staying right, runners will enter into beautiful Mine Falls park and run along the river, past the South bridge,
            under the highway, and head right over the bridge by the soccer fields. The paved trail will take you right in
            back toward Nashua South and into the finish by the Rotunda. <a href='https://www.strava.com/routes/3026504962025148624' target='_blank' rel="noopener noreferrer">View the full course map here</a>.
          </p>
          <p>
            In the event of inclement weather/snow or other conditions, an alternate course may be used.
          </p>
          <img src={courseMap} width="100%" height="auto" alt=""/>
        </Layout>
    )
  }
}

export default CourseInformation;
