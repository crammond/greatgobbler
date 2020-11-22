import React, { Component } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";

class Faq extends Component {
  render() {
    return (
      <Layout title="FAQ">
        <h2>Frequently Asked Questions</h2>
        <h3>When is the race?</h3>
        {/* <p>
          The race will be held on Thanksgiving Day Thursday, November 26, 2020 at Nashua High School South. The 5K race starts at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) starts at 7:30 A.M. The start and finish of both races will be on the Nashua High School South track.
        </p> */}
        <p>
          This year we are going virtual, and you may complete your race any time from Thursday, November 26, 2020 through Sunday, December 6, 2020.
        </p>
        <h3>What is the cost of the race?</h3>
        <p>
          Registration for the race will open on September 1, 2020.
        </p>
        {/* <p>
          For all entries received by November 16, 2020:
        </p> */}
        <p>
          $20.00 Adults (18 and older)
          <br />
          $15.00 Youth (17 and younger)
          {/* <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10) */}
        </p>
        {/* <p>
          Registrations received after November 16, 2020:
        </p>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p> */}
        <h3>How do I sign up?</h3>
        <p>
          You may register online <a href='https://runsignup.com/Race/NH/Nashua/18thAnnualGreatGobblerThanksgivingDayVirtual5k' target='_blank' rel="noopener noreferrer">HERE</a>
        </p>
        <p>
          Online registration closes Sunday, December 6, 2020 at 11:59 P.M.{/*Monday night November 23, 2020 6:00 P.M.*/}
        </p>
        <p>
          Registration will be limited to the first 1,500 entrants. The last two years have SOLD OUT!
        </p>
        {/* <p>
          Due to increased number of registrants this year, there will be no race day registrations.
        </p> */}
        <h3>What happens in the event of inclement weather?</h3>
        <p>
          It is unlikely the race will be postponed due to inclement weather. This race has been run in the snow several times.  Any postponement would be announced NOT on this website but on our "Great Gobbler Thanksgiving Day 5k" Facebook page. If you don’t see an announcement there that means the race is on as scheduled. Due to the large size of the race we cannot respond to individual emails or calls in the days leading up to the race asking if the race “might” be postponed or what our “thinking” is about the weather on race day. Simply watch our Facebook for details.  If nothing is posted, the race is on as scheduled.
        </p>
        {/* <p>
          If the race is postponed, the inclement weather date would be Sunday, November 29, 2020. The 5K race will start at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) will start at 7:30am.
        </p> */}
        <p>
          There will be no refunds for inclement weather postponements.
        </p>
        {/* <p>
          The race directors do reserve the right to change the course in the event of ice/snow on the race course.
        </p> */}
        <h3>What is the race course?</h3>
        <p>
          THIS YEAR THE RACE IS VIRTUAL, AND THERE WILL BE NO IN PERSON MEETING AT NASHUA HIGH SOUTH. Below you will find a description of the usual course.
        </p>
        <p>
          The 5k race course begins on the South track, proceeds out through the gate by the Panther dome through the student parking lots and turns right onto Riverside Drive, stays on Riverside Drive for approx. .5 miles, then turns right onto Stadium Drive toward Stellos Stadium, then passes by the Gate House and waterfalls and the remaining two miles are through the Mine Falls trails with a finish on the Nashua South track.
        </p>
        <p>
          <Link to='/course-information'>HERE</Link> is a link to the course map.
        </p>
        <p>
          In the event of inclement weather/snow or other conditions, an alternate course may be used.
        </p>
        <h3>Are you still taking donations of canned goods for the Nashua Soup Kitchen and Shelter?</h3>
        <p>
          Yes! There will be a table set up inside Fleet Feet Sports on Wednesday, November 25, 2020 during bib pick-up as well as a table inside the Nashua South cafeteria on race day.
        </p>
        <h3>When can I pick up my race bib?</h3>
        {/* <p>
          Race Bibs (and shirts for the first 500 entrants) will be distributed as follows:
        </p>
        <ul>
          <li>
            Wednesday, November 25, 2020 from 10:30 A.M. until 5:00 P.M. at Fleet Feet Sports in Nashua
          </li>
          <li>
            Thursday, November 26, 2020 from 6:45 A.M. until 7:45 A.M. on the day of the race in the Nashua High School South cafeteria
          </li>
        </ul> */}
        <p>
          Upon signing up, you will be assigned a bib number which you will use to automatically submit your finish data.
        </p>
        <h3>Will I get a Great Gobbler long sleeve shirt?</h3>
        {/* <p>
          The first 500 paid 5K registrants receive a Great Gobbler shirt. (No shirt for the kid’s fun run, but every child 2-10 will receive a finishers medal)
        </p> */}
        <p>
          Unfortunately under the current circumstances shirts are not available this year.
        </p>
        <h3>More Questions?</h3>
        <p>Ryan Haggerty - ryan.haggerty91@gmail.com</p>
        <p>Nate Burns - burnsn@nashua.edu</p>
      </Layout>
    )
  }
}

export default Faq;
