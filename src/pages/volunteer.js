import React, { Component } from 'react';

import Layout from '../components/layout';

class Volunteer extends Component {
  render() {
    return (
      <Layout title="Volunteer">
        <h2>Volunteer</h2>
        <p>Due to the nature of the virtual event this year we will not be needing volunteers. Please check back next year!</p>
        {/* <p>
          We always need volunteers! If you would like to volunteer, please signup <a href="http://www.signupgenius.com/go/5080c4faca923a3fd0-15annual" target="_blank" rel="noopener noreferrer">HERE</a>. There are many opportunities to help out!
        </p> */}
      </Layout>
    )
  }
}

export default Volunteer;
