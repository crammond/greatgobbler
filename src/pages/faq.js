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
          The race will be held on Thanksgiving Day Thursday, November 23, 2023 at Nashua High School South.
          The 5K race starts at 8:00 A.M. sharp. The Little Gobbler Fun Run (400m) starts at 7:30 A.M.
        </p>
        <h3>What is the cost of the race?</h3>
        <p>
          EARLY BIRD PRICING NOW AVAILBLE THROUGH AUGUST 31ST
          <br />
          $25.00 Adults (18 and older)
          <br />
          $20.00 Youth (17 and younger)
          <br />
          Regular pricing September 1st - November 22nd
          <br />
          $30.00 Adults (18 and older)
          <br />
          $25.00 Youth (17 and younger)
          <br />
          Little Gobbler (400m) Fun Run is FREE (ages 2-10)
        </p>
        <p>
          Registration on race day will cost $35.00 for Adults and $30.00 for Youth
        </p>
        <h3>How do I sign up?</h3>
        <p>
          Registration for the 21st annual Great Gobbler is now open! Sign up <a href='https://greatgobbler.enmotive.com/events/2023-great-gobbler-5k' target='_blank' rel="noopener noreferrer">here</a>.
        </p>
        <p>
          Online registration closes when we reach capacity. In-person registration and bib pick up will take place on Wednesday, November 22nd
          in the Nashua South Cafeteria from 10:00am to 5:00pm AND race day
          morning at Nashua South until 7:30am.
        </p>
        <h3>What happens in the event of inclement weather?</h3>
        <p>
          It is unlikely the race will be postponed due to inclement weather. This race has been run in the snow several times. Any postponement will be announced on this website and on our <a href='https://www.facebook.com/greatgobbler5knashua' target='_blank' rel="noopener noreferrer">"Great Gobbler Thanksgiving Day 5k" Facebook page</a>. If you don’t see an announcement that means the race is on as scheduled. Due to the large size of the race we cannot respond to individual emails or calls in the days leading up to the race asking if the race “might” be postponed or what our “thinking” is about the weather on race day.
        </p>
        <p>
          There will be no refunds for inclement weather postponements.
        </p>
        <h3>What is the race course?</h3>
        <p>
          The course begins and runs down Riverside Street, then takes a right after Conway Arena toward Stellos Stadium.
          Staying right, runners will enter into beautiful Mine Falls park and run along the river, past the South bridge,
          under the highway, and head right over the bridge by the soccer fields. The paved trail will take you right in
          back toward Nashua South and into the finish by the Rotunda.
          The Little Gobbler 400m fun run starts and finishes in the parking lot right outside the rotunda!
        </p>
        <p>
          In the event of inclement weather/snow or other conditions, an alternate course may be used.
        </p>
        <p>
          <Link to='/course-information'>HERE</Link> is a link to the course map.
        </p>
        <p>
          In the event of inclement weather/snow or other conditions, an alternate course may be used.
        </p>
        <h3>Are you still taking donations of canned goods for the Nashua Soup Kitchen and Shelter?</h3>
        <p>
          Yes! Donations of canned goods for the Nashua Soup Kitchen and Shelter will be accepted on Wednesday, November 22nd 10:00am to 5:00pm AND race
          day morning in the Nashua South cafeteria. Thank you for your generosity!
        </p>
        <h3>When can I pick up my race bib?</h3>
        <p>
          Bib pick up (and shirt pick up for the first 500 entrants) will take place
          on Wednesday, November 22nd 10:00am to 5:00pm AND race day morning at
          Nashua South until 7:30am. We STRONGLY recommend taking advantage of early bib pick up
          to avoid lines and stress on race day morning.
        </p>
        <p>
          Although Wednesday's early bib-pickup is no longer being held at Fleet
          Feet, mention your Great Gobbler registration at Fleet Feet Sports in
          Nashua on November 22nd to receive a 15% off discount on your in-store
          purchase.
        </p>
        <h3>Will I get a Great Gobbler long sleeve shirt?</h3>
        <p>
          Our famous Great Gobbler long sleeve shirts are available for the first 500 registrants. Spots will fill up fast, so register quick in August! A limited number of sizes will be available for purchase at the Nashua South bib pickup and
          on race day. The first 500 registrants can pick up their shirts at bib pick up.
        </p>
        <h3>More Questions?</h3>
        <p>Email Shane Gagnon at gagnonsh@nashua.edu</p>
      </Layout>
    )
  }
}

export default Faq;
