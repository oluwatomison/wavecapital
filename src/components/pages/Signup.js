import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { coloredButton } from '../layout/Home'
import { formText } from './Signin'

export default class Signup extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 formContainer">
                  <form onSubmit={this.handleSubmit} className="form-group Form">
                    <div>
                      <h3>Sign up for your Account</h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 targetControl">
                        <input type="first_name" name="first_name" className="form-control" placeholder="Enter your First name" />
                      </div>
                      <div className="col-sm-12 targetControl">
                        <input type="last_name" name="last_name" className="form-control" placeholder="Enter your Last name" />
                      </div>
                      <div className="col-sm-12 targetControl">
                        <input type="email" name="email" className="form-control" placeholder="Enter your Email" />
                      </div>
                      <div className="col-sm-12 targetControl">
                        <input type="password" name="password" className="form-control" placeholder="Enter your password" />
                      </div>
                      <div className="col-md-12 targetControl">
                        <input type="submit" value="Sign Up" className="form-control" style={coloredButton} />
                      </div>
                    </div>
                    <div style={formText}>
                      <p>
                        Already have an Account? <NavLink to="/signin">Sign In.</NavLink><br />
                        By Clicking on Sign Up you agree to the <NavLink to="/terms">Terms and Conditions</NavLink> and <NavLink to="/privacy-policy">Privacy Policy.</NavLink><br />
                        Need Help? <NavLink to="/contact-us">Contact Us</NavLink>
                      </p>
                    </div>
                  </form>
              </div>
            </div>
        </div>
      </>
    )
  }
}
