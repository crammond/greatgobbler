import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Sidebar } from 'semantic-ui-react';

import headerImage from './images/gobbler_start_2016_crop3.jpg'

import 'semantic-ui-css/semantic.min.css';

const items = [
  {key: 'faq', name: 'FAQ'},
  {key: 'registration', name: 'Registration'},
  {key: 'course information', name: 'Course Information'},
  {key: 'awards', name: 'Awards'},
  {key: 'volunteer', name: 'Volunteer'},
  {key: 'food donations', name: 'Food Donations'},
  {key: 'sponsors', name: 'Sponsors'},
  {key: 'results', name: 'Results'},
]

class App extends Component {
  render() {

    return (
      <div
        style={{
          height: '100%'
        }}>
          <div
            style={{
              padding: '10px',
              backgroundColor: '#ee804b'
            }}
          >
            <Container text textAlign='center' >
              <Header as='h1' inverted>
                Great Gobbler 5k
              </Header>
              <Header as='h3' inverted>
                Thursday November 23, 2017 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.
              </Header>
            </Container>
              <Container>
                <Menu
                  stackable
                  secondary
                  inverted
                  items={items}
                  widths={items.length}
                />
              </Container>
          </div>
          <Image src={headerImage} fluid />
          <Container text textAlign='center' style={{padding: '10px'}}>
            <Header as='h2'>
              A Nashua Community Thanksgiving Tradition
            </Header>
            <p>
              Warm up your Thanksgiving appetite at Nashua High School South at the 15th Annual Great Gobbler 5K! The Great Gobbler 5K brings together family, friends, Nashua High School cross country alumni as well as the Greater Nashua area community to start the day in a healthy way.  Join runners, joggers and walkers for a morning of fun in support of the Nashua North and South Boys and Girls Cross Country Programs.
            </p>
          </Container>
      </div>
    );
  }
}

export default App;
