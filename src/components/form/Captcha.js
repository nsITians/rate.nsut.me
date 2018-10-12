import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Grid } from 'semantic-ui-react'

import keys from '../../config/keys'

const onChange = () => {}

const CourseSelector = () => (
  <Grid centered>
    <ReCAPTCHA sitekey={keys.CAPTCHA_SITE_KEY} onChange={onChange} />
  </Grid>
)

export default CourseSelector
