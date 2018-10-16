import React, { Component } from 'react'
import { Button, Container, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import CourseSelector from './form/CourseSelector'
import ProfessorSelector from './form/ProfessorSelector'
import CourseReview from './form/CourseReview'
import Captcha from './form/Captcha'
import Footer from './Footer'

import './ReviewForm.css'

const pages = [
  <CourseSelector />,
  <ProfessorSelector />,
  <CourseReview />,
  <Captcha />
]

class ReviewForm extends Component {
  constructor(props) {
    super(props)

    this.state = { page: 0 }
  }

  renderCloseButton() {
    return (
      <Link to="/">
        <Icon
          name="close"
          style={{
            position: 'absolute',
            top: '2em',
            right: '2em',
            color: '#fff'
          }}
        />
      </Link>
    )
  }

  renderNextButton() {
    if (this.state.page < pages.length - 1)
      return (
        <Button
          icon
          color="green"
          labelPosition="right"
          floated="right"
          onClick={() => {
            if (this.state.page < pages.length - 1)
              this.setState({ page: this.state.page + 1 })
          }}
        >
          <Icon name="arrow right" />
          Next
        </Button>
      )
  }

  renderSubmitButton() {
    if (this.state.page === pages.length - 1)
      return <Button primary>Submit</Button>
  }

  render() {
    return (
      <React.Fragment>
        {this.renderCloseButton()}
        <Grid
          textAlign="center"
          className="review-form-subcomponent"
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450, margin: '1rem' }}>
            {pages[this.state.page]}
            <Container id="dual-nav-btn-container">
              {this.renderNextButton()}
              {this.renderSubmitButton()}
            </Container>
          </Grid.Column>
        </Grid>
        <Footer />
      </React.Fragment>
    )
  }
}

export default ReviewForm
