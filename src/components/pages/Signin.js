import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { coloredButton } from '../layout/Home'

export const formText = {
  textAlign: "center",
  marginTop: "30px"
}

export default class Signin extends Component {

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
                      <h3>Log In to your Wave Capital Account</h3>
                    </div>
                    <div className="row">
                      <div className="col-md-12 targetControl">
                        <input type="email" name="email" className="form-control" placeholder="Enter your Email" />
                      </div>
                      <div className="col-md-12 targetControl">
                        <input type="password" name="password" className="form-control" placeholder="Enter your password" />
                      </div>
                      <div className="col-md-12 targetControl">
                        <input type="submit" value="Sign In" className="form-control" style={coloredButton} />
                      </div>
                    </div>
                    <div style={formText}>
                      <p>
                        Forgot your Password? <NavLink to="/password-reset">Reset it.</NavLink> <br />
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
