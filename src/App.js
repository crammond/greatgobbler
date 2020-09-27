import React, { Component } from 'react';

import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home'
import Faq from './pages/Faq'
import Registration from './pages/Registration'
import CourseInformation from './pages/CourseInformation'
import Awards from './pages/Awards'
import Volunteer from './pages/Volunteer'
import FoodDonations from './pages/FoodDonations'
import Sponsors from './pages/Sponsors'
import Results from './pages/Results'

import headerImage from './images/gobbler_start_2016_crop3.jpg'

/*
import fleetFeet from './images/FF_Logo_Nashua_Color.png'
import threeC from './images/3c_logo_en.png'
import stJoseph from './images/SJN_horizontal.jpg'
import snhh from './images/SNHH_NETWORK.jpg'
import chewie from './images/Chewie Logo.jpg'
import conway from './images/conway logo.png'
import dcuGreen from './images/DCUGreen.svg'
import gateCityFarm from './images/Gate City Farm Logo.png'
import prg from './images/PRG Logo.png'
*/

import south from './images/panther_logo.png'
import north from './images/titan_logo.png'
import gobbler from './images/gobblerlogo.png'

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

const sponsors = []

class App extends Component {

  render() {

    return (
      <div>
        <h1>Great Gobbler 5k</h1>
        <h2>Thursday, November 26, 2020 @ Nashua High School South. Great Gobbler 5k @ 8:00 A.M., Little Gobbler (400m) @ 7:30 A.M.</h2>
        <h2>A Nashua Community Thanksgiving Tradition</h2>
        <ul>
          {items.map(item => <li><Link to={`/${item.key}`}>{item.name}</Link></li>)}
        </ul>
        
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
      </div>
    );
  }
}

export default App;
