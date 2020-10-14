import React, { Component } from 'react';

import Layout from '../components/layout';

class Awards extends Component {
  render() {
    return (
      <Layout title="Awards">
        <h2>Awards</h2>
        <p>
          Awards will fall into 3 categories:
        </p>
        <ul>
          <li>Top 3 Overall Men</li>
          <li>Top 3 Overall Women</li>
          <li>Top 3 Age-Graded Alumni</li>
        </ul>
      </Layout>
    )
  }
}

export default Awards;
