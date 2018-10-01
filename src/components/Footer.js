import React, { Component } from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Legal" />
                <List link inverted>
                  <List.Item as="a">Privacy Policy</List.Item>
                  <List.Item as="a">Terms and Conditions</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Disclaimer
                </Header>
                <p>
                  We are not affiliated, associated, authorized, endorsed by, or
                  in any way officially connected with NSUT.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer
