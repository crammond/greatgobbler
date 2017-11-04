import React, { Component } from 'react';
import {
  Header
} from 'semantic-ui-react';

class Volunteer extends Component {
  render() {
    return (
      <div>
        <Header as='h2' content='Volunteer' />
        <p>
          We always need volunteers! If you would like to volunteer, please signup <a href="http://www.signupgenius.com/go/9040545A9A829A20-12th/20419597" >HERE</a>. There are many opportunities to help out!
        </p>
      </div>
    )
  }
}

export default Volunteer;
