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

import fleetFeet from './images/FF_Logo_Nashua_Color.png'
import threeC from './images/3c_logo_en.png'
import stJoseph from './images/SJN_horizontal.jpg'
import snhh from './images/SNHH_NETWORK.jpg'
import chewie from './images/Chewie Logo.jpg'
import conway from './images/conway logo.png'
import dcuGreen from './images/DCUGreen.svg'
import gateCityFarm from './images/Gate City Farm Logo.png'
import prg from './images/PRG Logo.png'

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
  fleetFeet,
  snhh,
  chewie,
  conway,
  dcuGreen,
  gateCityFarm,
  prg
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
                        <Menu.Item key='home' name='Home' as={NavLink} exact to='/' />
                        {
                          items.map(item => {return <Menu.Item key={item.key} name={item.name} as={NavLink} exact to={`/${item.key}`} />})
                        }
                      </Menu>
                    }
                  />
                </Responsive>
                <Responsive as={Menu.Item} position='left' maxWidth={1050} >
                  <Dropdown icon={<Icon name='content' inverted/>}>
                    <Dropdown.Menu>
                      <Dropdown.Item key='home' as={NavLink} exact to={'/'} text='Home' />
                      {
                        items.map(item => {return <Dropdown.Item key={item.key} as={NavLink} exact to={'/' + item.key} text={item.name} />})
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
                      Thursday, November 26, 2020 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.
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
                <Route exact path='/' component={Home}/>
                <Route exact path='/faq' component={Faq}/>
                <Route exact path='/registration' component={Registration}/>
                <Route exact path='/course-information' component={CourseInformation}/>
                <Route exact path='/awards' component={Awards}/>
                <Route exact path='/volunteer' component={Volunteer}/>
                <Route exact path='/food-donations' component={FoodDonations}/>
                <Route exact path='/sponsors' component={Sponsors}/>
                <Route exact path='/results' component={Results}/>
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
