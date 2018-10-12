import React from 'react'
import { Form, Header, Rating, TextArea } from 'semantic-ui-react'

const CourseSelector = () => (
  <React.Fragment>
    <Header as="h2" inverted textAlign="center">
      Review "Test Course"
    </Header>
    <Rating icon="star" defaultRating={5} maxRating={5} size="huge" />
    <Form style={{ marginTop: '4em' }}>
      <TextArea
        autoHeight
        placeholder="Review the course (required)"
        rows={5}
      />
    </Form>
  </React.Fragment>
)

export default CourseSelector
