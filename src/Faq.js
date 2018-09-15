import React, { Component } from 'react';
import {
  Header,
  Container,
  List
} from 'semantic-ui-react';
import {
  Link
} from 'react-router-dom'

class Faq extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2'>Frequently Asked Questions</Header>
        <Header as='h3'>When is the race?</Header>
        <p>
          The race will be held on Thanksgiving Day Thursday, November 22, 2018 at Nashua High School South. The 5K race starts at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) starts at 7:30 A.M. The start and finish of both races will be on the Nashua High School South track.
        </p>
        <Header as='h3'>What is the cost of the race?</Header>
        <p>
          Registration for the race will open on September 1, 2018.
        </p>
        <p>
          For all entries received by November 12, 2018:
        </p>
        <p>
          $20.00 Adults (18 and older)
          <br />
          $15.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registrations received after November 12, 2018:
        </p>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <Header as='h3'>How do I sign up?</Header>
        <p>
          You may register online <a href='https://g2racereg.webconnex.com/gobbler5k2018' target='_blank' rel="noopener noreferrer">HERE</a>
        </p>
        <p>
          Online registration closes Monday night November 19, 2018 6:00 P.M.
        </p>
        <p>
          Registration will be limited to the first 1,500 entrants. The last two years have SOLD OUT!
        </p>
        {/* <p>
          Due to increased number of registrants this year, there will be no race day registrations.
        </p> */}
        <Header as='h3'>What happens in the event of inclement weather?</Header>
        <p>
          It is unlikely the race will be postponed due to inclement weather. This race has been run in the snow several times.  Any postponement would be announced NOT on this website but on our "Great Gobbler Thanksgiving Day 5k" Facebook page. If you don’t see an announcement there that means the race is on as scheduled. Due to the large size of the race we cannot respond to individual emails or calls in the days leading up to the race asking if the race “might” be postponed or what our “thinking” is about the weather on race day. Simply watch ourFacebook for details.  If nothing is posted, the race is on as scheduled.
        </p>
        <p>
          If the race is postponed, the inclement weather date would be Sunday, November 25, 2018. The 5K race will start at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) will start at 7:30am.
        </p>
        <p>
          There will be no refunds for inclement weather postponements.
        </p>
        <p>
          The race directors do reserve the right to change the course in the event of ice/snow on the race course.
        </p>
        <Header as='h3'>What is the race course?</Header>
        <p>
          The 5k race course begins on the South track, proceeds out through the gate by the Panther dome through the student parking lots and turns right onto Riverside Drive, stays on Riverside Drive for approx. .5 miles, then turns right onto Stadium Drive toward Stellos Stadium, then passes by the Gate House and waterfalls and the remaining two miles are through the Mine Falls trails with a finish on the Nashua South track.
        </p>
        <p>
          <Link to='/course_information'>HERE</Link> is a link to the course map.
        </p>
        <p>
          In the event of inclement weather/snow or other conditions, an alternate course may be used.
        </p>
        <Header as='h3'>Are you still taking donations of canned goods for the Nashua Soup Kitchen and Shelter?</Header>
        <p>
          Yes! There will be a table set up inside Fleet Feet Sports on Wednesday, November 21, 2018 during bib pick-up as well as a table inside the Nashua South cafeteria on race day.
        </p>
        <Header as='h3'>When can I pick up my race bib?</Header>
        <p>
          Race Bibs (and shirts for the first 500 entrants) will be distributed as follows:
        </p>
        <List bulleted>
          <List.Item>
            Wednesday, November 21, 2018 from 10:30 A.M. until 5:00 P.M. at Fleet Feet Sports in Nashua
          </List.Item>
          <List.Item>
            Thursday, November 22, 2018 from 6:45 A.M. until 7:45 A.M. on the day of the race in the Nashua High School South cafeteria
          </List.Item>
        </List>
        <Header as='h3'>Will I get a Great Gobbler long sleeve shirt?</Header>
        <p>
          The first 500 paid 5K registrants receive a Great Gobbler shirt. (No shirt for the kid’s fun run, but every child 2-10 will receive a finishers medal)
        </p>
        <Header as='h3'>More Questions?</Header>
        <p>Ryan Haggerty - ryan.haggerty91@gmail.com</p>
        <p>Nate Burns - burnsn@nashua.edu</p>
      </Container>
    )
  }
}

export default Faq;
