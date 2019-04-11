import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Instructions from './Instructions'
import Testimonials from './Testimonials'
import Footer from './Footer'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Instructions />
        <Testimonials />
        <Footer />
      </div>
    )
  }
}
