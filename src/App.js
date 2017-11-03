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
  Link
} from 'react-router-dom'

import Home from './Home'
import Faq from './Faq'

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
              <Responsive as={Menu.Item} minWidth={1200}>
                <Menu.Menu
                  position='right'
                  content={
                    <Menu
                      style={{backgroundColor: 'inherit'}}
                      inverted
                    >
                      {
                        items.map(item => {return <Menu.Item key={item.key} name={item.name} as={Link} to={'/' + item.key} />})
                      }
                    </Menu>
                  }
                />
              </Responsive>
              <Responsive as={Menu.Item} position='left' maxWidth={1200} >
                <Dropdown text='Menu'>
                  <Dropdown.Menu>
                    {
                      items.map(item => {return <Dropdown.Item key={item.key} as={Link} to={'/' + item.key} text={item.name} />})
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/faq" component={Faq}/>
              <Route exact path="/registration" component={() => <div>registration</div>}/>
              <Route exact path="/course_information" component={() => <div>course_information</div>}/>
              <Route exact path="/awards" component={() => <div>awards</div>}/>
              <Route exact path="/volunteer" component={() => <div>volunteer</div>}/>
              <Route exact path="/food_donations" component={() => <div>food_donations</div>}/>
              <Route exact path="/sponsors" component={() => <div>sponsors</div>}/>
              <Route exact path="/results" component={() => <div>results</div>}/>
            </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
