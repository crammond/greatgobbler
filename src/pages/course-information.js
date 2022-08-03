import React, { Component } from 'react';

import Layout from '../components/layout';

import courseMap from "../images/GobblerMAP2.png"

class CourseInformation extends Component {
  render() {
    return (
        <Layout title="Course Information">
          <h2>Course Information</h2>
          <p>
            The 5k race course begins by the South rotunda, proceeds out through the gate by the Panther dome
            through the student parking lots and turns right onto Riverside Drive, stays on Riverside Drive
            for approx. .5 miles, then turns right onto Stadium Drive toward Stellos Stadium, then passes by
            the Gate House and waterfalls and the remaining two miles are through the Mine Falls trails with a
            finish by the South Rotunda.
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
