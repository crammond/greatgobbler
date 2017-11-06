import React, { Component } from 'react';
import {
  Container,
  Menu,
  Header,
  Image,
  Responsive,
  Dropdown,
  Grid,
  Icon
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

import fleetFeet from './images/svglogofleetfeet.svg'
import donnaCorey from './images/donnacorey.JPG'
import threeC from './images/3c_logo_en.png'
import stJoseph from './images/stjosephhospital.png'
import windSoul from './images/windsoul_logo.png'

import south from './images/panther_logo.png'
import north from './images/titan_logo.png'
import gobbler from './images/gobblerlogo.png'

import 'semantic-ui-css/semantic.min.css';

const items = [
  {key: 'faq', name: 'FAQ'},
  {key: 'registration', name: 'Registration'},
  {key: 'course-information', name: 'Course Information'},
  {key: 'awards', name: 'Awards'},
  {key: 'volunteer', name: 'Volunteer'},
  {key: 'food-donations', name: 'Food Donations'},
  {key: 'sponsors', name: 'Sponsors'},
  {key: 'results', name: 'Results'},
]

const sponsors = [
  stJoseph,
  threeC,
  donnaCorey,
  fleetFeet,
  windSoul
]

class App extends Component {

  render() {

    return (
      <div style={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
        <div
          style={{
            flex: '1 0 auto'
          }}>
            <div
              style={{
                padding: '10px',
                backgroundColor: '#cf5300'
              }}
            >
              <Menu secondary>
                <Responsive minWidth={1050}>
                  <Image height='100px' width='auto' src={gobbler}/>
                </Responsive>
                <Responsive as={Menu.Item} header minWidth={1300}>
                  <Header as='h1' inverted>
                    Great Gobbler 5k
                  </Header>
                </Responsive>
                <Responsive as={Menu.Item} minWidth={1050}>
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
                <Responsive as={Menu.Item} position='left' maxWidth={1050} >
                  <Dropdown icon={<Icon name='content' inverted/>}>
                    <Dropdown.Menu>
                      <Dropdown.Item key='home' as={NavLink} exact to={process.env.PUBLIC_URL + '/'} text='Home' />
                      {
                        items.map(item => {return <Dropdown.Item key={item.key} as={NavLink} exact to={process.env.PUBLIC_URL + '/' + item.key} text={item.name} />})
                      }
                    </Dropdown.Menu>
                  </Dropdown>
                </Responsive>
              </Menu>
              <Container>
                <Grid verticalAlign='middle'>
                  <Grid.Column width={3} only='computer'>
                    <Image src={south} centered style={{maxHeight: '100px'}} width='auto'/>
                  </Grid.Column>
                  <Grid.Column computer={10} mobile={16}>
                    <Header as='h2' textAlign='center' inverted>
                      Thursday November 23, 2017 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={3} only='computer'>
                    <Image src={north} centered style={{maxHeight: '100px'}} width='auto'/>
                  </Grid.Column>
                </Grid>
              </Container>
            </div>
            <Image src={headerImage} fluid />
            <Container style={{padding: '10px'}}>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
                <Route exact path={process.env.PUBLIC_URL + '/faq'} component={Faq}/>
                <Route exact path={process.env.PUBLIC_URL + '/registration'} component={Registration}/>
                <Route exact path={process.env.PUBLIC_URL + '/course-information'} component={CourseInformation}/>
                <Route exact path={process.env.PUBLIC_URL + '/awards'} component={Awards}/>
                <Route exact path={process.env.PUBLIC_URL + '/volunteer'} component={Volunteer}/>
                <Route exact path={process.env.PUBLIC_URL + '/food-donations'} component={FoodDonations}/>
                <Route exact path={process.env.PUBLIC_URL + '/sponsors'} component={Sponsors}/>
                <Route exact path={process.env.PUBLIC_URL + '/results'} component={Results}/>
              </Switch>
            </Container>
        </div>
        <div>
          <Grid columns={sponsors.length} verticalAlign='middle' style={{margin: 0}} doubling centered>
            {sponsors.map((logo, index) => {return <Grid.Column key={'sponsor' + index}><Image centered src={logo} height='auto' width='200px'/></Grid.Column>})}
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
