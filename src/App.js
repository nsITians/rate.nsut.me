import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop'
import Home from './components/Home'
import ReviewForm from './components/ReviewForm'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/review" component={ReviewForm} />
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default App
