import React, { Component } from 'react';
import {
  Header,
  List,
  Container
} from 'semantic-ui-react';

class Awards extends Component {
  render() {
    return (
      <Container text>
        <Header as='h2' content='Awards' />
        <p>
          Awards will fall into 3 categories:
        </p>
        <List bulleted>
          <List.Item>Top 3 Overall Men</List.Item>
          <List.Item>Top 3 Overall Women</List.Item>
          <List.Item>Top 3 Age-Graded Alumni</List.Item>
        </List>
      </Container>
    )
  }
}

export default Awards;
