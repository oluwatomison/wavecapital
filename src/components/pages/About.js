import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function About() {
  return (
    <>
        <Navbar />
        <div className="container-fluid halfContainer">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="pageHeader">About Wave Capital</h3>
                </div>
            </div>
        </div>
        <div className="container mainContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{textAlign: 'center', fontFamily: 'Open Sans'}}>
                Our Mission at Wave Capital is to help you develop a Savings Culture in order for you to have the Future that you deserve.
                With our "Returns on Savings", Your financial future is assured. Welcome on board!
              </h2>
            </div>
          </div>
        </div>
        <div className="container secContainer">
          <div className="row">
            <div className="col-md-12">
              <h1 className="mainPageHeaders">Meet the Team</h1>
              <p style={teamTagLine}>WC is building a great product today.  These are the brains behind everything!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 teamCard">
              <img src="./img/team/2.jpg" alt="Team Member" className="teamImg" />
              <div className="teamCardText">
                <h5 className="teamCardHeader">Daniel</h5>
                <p className="teamCardPosition">CEO, Co-founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid joinTeamContainer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="joinTeamHeader">Join our Team</h1>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <p className="joinTeamText">We are a team of enthisiastic, passionate, hard-working and focused individuals given to dream of helping our customers develop a healthy Savings habit
                  so as to be financially prepared for their future and that of their children. You can join us in making this dream a reality.
                </p>
              </div>
              <div className="col-md-12 joinTeamBtn">
                <NavLink to="">
                    <button className="btn btn-light">Email us <i className="fas fa-paper-plane"></i></button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}
