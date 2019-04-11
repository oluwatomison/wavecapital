import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { coloredButton } from '../layout/Home'

export const formText = {
  textAlign: "center",
  marginTop: "30px"
}

export default class Reset extends Component {

  state = {
    email: '',
    password: ''
  }

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
                    <div style={{textAlign: "center"}}>
                      <h3>Reset your Password</h3>
                    </div>
                    <div className="row">
                      <div className="col-md-12 targetControl">
                        <input type="email" name="email" className="form-control" placeholder="Enter your Email" />
                      </div>
                      <div className="col-md-12 targetControl">
                        <input type="submit" value="Send Reset Link" className="form-control" style={coloredButton} />
                      </div>
                    </div>
                    <div style={formText}>
                      <p>
                        Don't have an Account? <NavLink to="/signup">Sign Up.</NavLink>
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
