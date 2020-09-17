import React, { Component } from 'react';
import {
  Header,
  Grid,
  Button,
  Container,
  Responsive
} from 'semantic-ui-react';
import FacebookPageWrapper from './FacebookPageWrapper'

class Home extends Component {

  state = {timeLastChanged: 0}

  updateFacebookWidth = (pageWidth, timeStamp = -1) => {
    let newFacebookWidth = this.pageWidthToFacebookWidth(pageWidth)
    if(timeStamp === -1 || (pageWidth !== newFacebookWidth && pageWidth >= 768) || timeStamp - this.state.timeLastChanged > 3000)
      this.setState({facebookWidth: newFacebookWidth, timeLastChanged: timeStamp})
  }

  pageWidthToFacebookWidth = (pageWidth) => {
    if(pageWidth >= 1200)
      return 396
    else if (pageWidth >= 992)
      return 324
    else if (pageWidth >= 768)
      return 246
    else if (pageWidth - 65 > 0)
      return pageWidth - 65
    else
      return 0
  }

  componentWillMount() {
    this.updateFacebookWidth(window.innerWidth)
  }

  shouldComponentUpdate(_, nextState) {
    return this.state.facebookWidth !== nextState.facebookWidth
  }

  render() {
    return (
      <Grid reversed='mobile' stackable>
        <Grid.Column width={10}>
          <Container style={{width: '100%'}} text>
            <p style={{color: "red", fontSize: "2.5rem"}}>
              Due to the COVID-19 pandemic, the Great Gobbler race is going virtual this year. Click on the "REGISTER" link to register for our virtual Great Gobbler.
            </p>
            <Header textAlign='center' as='h2'>
              A Nashua Community Thanksgiving Tradition
            </Header>
            <p>
              Warm up your Thanksgiving appetite at Nashua High School South at the 18th Annual Great Gobbler 5K! The Great Gobbler 5K brings together family, friends, Nashua High School cross country alumni as well as the Greater Nashua area community to start the day in a healthy way.  Join runners, joggers and walkers for a morning of fun in support of the Nashua North and South Boys and Girls Cross Country Programs.
            </p>
          </Container>
        </Grid.Column>
        <Grid.Column textAlign='center' width={6}>
          <Button
            content='REGISTER'
            primary
            style={{margin: 0}}
            size='massive'
            as='a'
            href='https://runsignup.com/Race/NH/Nashua/18thAnnualGreatGobblerThanksgivingDayVirtual5k'
            target='_blank'
          />
          <br />
          <br />
          <Responsive
            as={FacebookPageWrapper}
            width={this.state.facebookWidth}
            onUpdate={(event, data) => {
              this.updateFacebookWidth(data.width, event.timeStamp)
            }}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;
