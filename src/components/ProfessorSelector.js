import React from 'react'
import { Form, Header, Message } from 'semantic-ui-react'

const ProfessorSelector = props => (
  <React.Fragment>
    <Header as="h2" inverted textAlign="center">
      Select Professors
    </Header>
    <Form size="large">
      <Form.Input fluid icon="search" iconPosition="left" />
    </Form>
    <Message style={{ marginTop: '1em' }}>
      In case the course was taught by more than one professor (e.g. different
      lab instructor, etc), you can select them all.
    </Message>
  </React.Fragment>
)

export default ProfessorSelector
