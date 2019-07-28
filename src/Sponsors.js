import React, { Component } from 'react';
import {
  Header,
  List,
  Container
} from 'semantic-ui-react';

import sponsorInfo from "./pdfs/Sponsorship Levels 2019 GG.pdf"

class Sponsors extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2' content='Sponsors' />
        <Header as='h3' content='Primary Sponsor' />
        <p>St. Joseph Hospital</p>
        <Header as='h4' content='Gold Sponsors' />
        <p>Fleet Feet Sports, Haggerty's Cleaning Service, Inc.</p>
        <Header as='h3' content='Want to become a Sponsor?' />
        <List bulleted>
          <List.Item>
            <List.Content>
              <Header as='h4' content='Platinum ($1000)' />
              <List.Description>
                Two free race numbers, space for a booth on race day, and your company name will be announced on race day, company name/logo on website and prime location on the race shirt, we will hang a banner provided by you at the event, and place your name on a mile marker.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Header as='h4' content='Gold ($500)' />
              <List.Description>
                Two free race numbers, space for a booth on race day, and your company name will be announced on race day, company name/logo on website and shirt, and we will hang a banner provided by you at the event.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Header as='h4' content='Silver ($250)' />
              <List.Description>
                One free race number, name on back of shirt, space for a booth on race day, and your company name will be announced on race day.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Header as='h4' content='Bronze ($100)' />
              <List.Description>
                One free race number and space for a booth on race day.
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <Header as='h3' content='Why Sponsor?' />
        <p>
          Your sponsorship benefits both the Nashua High School North and South Boys’ and Girls’ Cross-Country programs. The cross-country teams at North and South work to keep students active, strive for academic excellence, and promote community service.
        </p>
        <p>
          To become a sponsor, download this form:  <a href={sponsorInfo} target="_blank" rel="noopener noreferrer">Sponsorship Form</a>
        </p>
      </Container>
    )
  }
}

export default Sponsors;
