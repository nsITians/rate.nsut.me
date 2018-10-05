import React from 'react'
import { Form, Header } from 'semantic-ui-react'

const CourseSelector = () => (
  <React.Fragment>
    <Header as="h2" inverted textAlign="center">
      Select a Course
    </Header>
    <Form size="large">
      <Form.Input fluid icon="search" iconPosition="left" />
    </Form>
  </React.Fragment>
)

export default CourseSelector
