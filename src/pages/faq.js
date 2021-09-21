import React, { Component } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";

class Faq extends Component {
  render() {
    return (
      <Layout title="FAQ">
        <h2>Frequently Asked Questions</h2>
        <h3>When is the race?</h3>
        <p>
          The race will be held on Thanksgiving Day Thursday, November 25, 2021 at Nashua High School South.
          The 5K race starts at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) starts at 7:30 A.M.
        </p>
        <h3>What is the cost of the race?</h3>
        <p>
          Registration for the race will be open soon! Keep an eye on our <a href='https://www.facebook.com/greatgobbler5knashua' target='_blank' rel="noopener noreferrer">Facebook</a> page or check back here. 
        </p>
        <p>
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <h3>How do I sign up?</h3>
        <p>
          A registration link will be available here and on the home page soon.
          {/* You may register online <a href='https://runsignup.com/Race/NH/Nashua/18thAnnualGreatGobblerThanksgivingDayVirtual5k' target='_blank' rel="noopener noreferrer">HERE</a> */}
        </p>
        <p>
          Online registration closes Monday, November 22nd 2021. In-person registration and bib pick up will take place on Wednesday, November 24th at Fleet Feet Sports in Nashua from 10:00am to 5:00pm AND race day morning at Nashua South until 7:30am.
        </p>
        <h3>What happens in the event of inclement weather?</h3>
        <p>
          It is unlikely the race will be postponed due to inclement weather. This race has been run in the snow several times. Any postponement would be announced NOT on this website but on our <a href='https://www.facebook.com/greatgobbler5knashua' target='_blank' rel="noopener noreferrer">"Great Gobbler Thanksgiving Day 5k" Facebook page</a>. If you don’t see an announcement there that means the race is on as scheduled. Due to the large size of the race we cannot respond to individual emails or calls in the days leading up to the race asking if the race “might” be postponed or what our “thinking” is about the weather on race day. Simply watch our <a href='https://www.facebook.com/greatgobbler5knashua' target='_blank' rel="noopener noreferrer">Facebook</a> for details. If nothing is posted, the race is on as scheduled.
        </p>
        <p>
          There will be no refunds for inclement weather postponements.
        </p>
        <p>
          The race directors do reserve the right to change the course in the event of ice/snow on the race course.
        </p>
        <h3>What is the race course?</h3>
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
          Yes! Donations of canned goods for the Nashua Soup Kitchen and Shelter will be accepted on Wednesday, November 24th at Fleet Feet Sports in Nashua from 10:00am to 5:00pm AND race day morning in the Nashua South cafeteria. Thank you for your generosity!
        </p>
        <h3>When can I pick up my race bib?</h3>
        <p>
          Bib pick (and shirt pick up for the first 500 entrants) up will take place on Wednesday, November 24th at Fleet Feet Sports in Nashua from 10:00am to 5:00pm AND race day morning at Nashua South until 7:30am.
        </p>
        <h3>Will I get a Great Gobbler long sleeve shirt?</h3>
        <p>
          Our famous Great Gobbler long sleeve shirts are available for the first 500 registrants.{/* Spots are filling fast, so register now!*/} A limited number of sizes will be available for purchase at the Fleet Feet bib pickup and on race day.

          The first 500 registrants can pick up their shirts at bib pick up.
        </p>
        <h3>More Questions?</h3>
        <p>Email Shane Gagnon at gagnonsh@nashua.edu</p>
      </Layout>
    )
  }
}

export default Faq;
