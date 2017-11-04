import React, { Component } from 'react';
import {
  Container,
  Menu,
  Header,
  Image,
  Responsive,
  Dropdown
} from 'semantic-ui-react';
import {
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import Home from './Home'
import Faq from './Faq'
import Registration from './Registration'
import CourseInformation from './CourseInformation'
import Awards from './Awards'
import Volunteer from './Volunteer'
import FoodDonations from './FoodDonations'
import Sponsors from './Sponsors'
import Results from './Results'

import headerImage from './images/gobbler_start_2016_crop3.jpg'

import 'semantic-ui-css/semantic.min.css';

const items = [
  {key: 'faq', name: 'FAQ'},
  {key: 'registration', name: 'Registration'},
  {key: 'course_information', name: 'Course Information'},
  {key: 'awards', name: 'Awards'},
  {key: 'volunteer', name: 'Volunteer'},
  {key: 'food_donations', name: 'Food Donations'},
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
              backgroundColor: '#cf5300'
            }}
          >
            <Menu secondary>
              <Responsive as={Menu.Item} header minWidth={1200}>
                <Header as='h1' inverted>
                  Great Gobbler 5k
                </Header>
              </Responsive>
              <Responsive as={Menu.Item} minWidth={950}>
                <Menu.Menu
                  position='right'
                  content={
                    <Menu
                      style={{backgroundColor: 'inherit'}}
                      inverted
                    >
                      <Menu.Item key='home' name='Home' as={NavLink} exact to={process.env.PUBLIC_URL + '/'} />
                      {
                        items.map(item => {return <Menu.Item key={item.key} name={item.name} as={NavLink} exact to={process.env.PUBLIC_URL + '/' + item.key} />})
                      }
                    </Menu>
                  }
                />
              </Responsive>
              <Responsive as={Menu.Item} position='left' maxWidth={950} >
                <Dropdown icon='content'>
                  <Dropdown.Menu>
                    <Dropdown.Item key='home' as={NavLink} exact to={process.env.PUBLIC_URL + '/'} text='Home' />
                    {
                      items.map(item => {return <Dropdown.Item key={item.key} as={NavLink} exact to={process.env.PUBLIC_URL + '/' + item.key} text={item.name} />})
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </Responsive>
            </Menu>
            <Container textAlign='center' >
              <Header as='h2' inverted>
                Thursday November 23, 2017 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.
              </Header>
            </Container>
          </div>
          <Image src={headerImage} fluid />
          <Container text style={{padding: '10px'}}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
              <Route exact path={process.env.PUBLIC_URL + '/faq'} component={Faq}/>
              <Route exact path={process.env.PUBLIC_URL + '/registration'} component={Registration}/>
              <Route exact path={process.env.PUBLIC_URL + '/course_information'} component={CourseInformation}/>
              <Route exact path={process.env.PUBLIC_URL + '/awards'} component={Awards}/>
              <Route exact path={process.env.PUBLIC_URL + '/volunteer'} component={Volunteer}/>
              <Route exact path={process.env.PUBLIC_URL + '/food_donations'} component={FoodDonations}/>
              <Route exact path={process.env.PUBLIC_URL + '/sponsors'} component={Sponsors}/>
              <Route exact path={process.env.PUBLIC_URL + '/results'} component={Results}/>
            </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
