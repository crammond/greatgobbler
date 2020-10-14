import React, { Component } from 'react';

import Layout from '../components/layout';

import courseMap from "../images/GobblerMAP2.png"

class CourseInformation extends Component {
  render() {
    return (
        <Layout title="Course Information">
          <h2>Course Information</h2>
          <p>
            The 5k race course begins and ends in front of Nashua South High School, running through Mines Falls for the 2nd and 3rd mile:
          </p>
          <img src={courseMap} width="100%" height="auto" alt=""/>
        </Layout>
    )
  }
}

export default CourseInformation;
