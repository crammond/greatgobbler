import React, { Component } from 'react';
import {
  Header,
  Image,
  Container
} from 'semantic-ui-react';

import map from './images/GobblerMAP2.png'

class CourseInformation extends Component {
  render() {
    return (
        <Container text>
          <Header as='h2' content='Course Information' />
          <p>
            The 5k race course begins and ends in front of Nashua South High School, running through Mines Falls for the 2nd and 3rd mile:
          </p>
          <Image
            alt='Course map'
            bordered
            centered
            fluid
            src={map}
          />
        </Container>
    )
  }
}

export default CourseInformation;
