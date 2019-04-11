import React from 'react'
import { NavLink } from 'react-router-dom'

export const hrLine = {
    border: "1px solid #3848f3",
    width: "100px"
}
const pageButton = {
    marginTop: "20px",
}
export const coloredButton = {
    background: "linear-gradient(to right top, #3848f3, #3241d8, #2d3bbe, #2834a5, #242d8c)",
    border: "none",
    padding: "10px",
    color: "#fff",
    borderRadius: "50px",
    cursor: "pointer"
}
const unColoredButton = {
    background: "none",
    border: "1px solid #fff",
    padding: "10px",
    color: "#fff",
    borderRadius: "50px",
    cursor: "pointer"
}

export default function Home() {
  return (
    <>
        <div className="container-fluid landingPageContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mainLandingPageText">
                        <h1>Save and Invest Smartly.</h1>
                        <h3>Prepare for the future</h3><hr style={hrLine} />
                        <p>Automate your Savings and Investments and earn 
                            <strong> 14%-22% per annum.</strong>
                        </p>
                        <div className="more-info">
                            <p>
                                Grow your savings automatically. <br />
                                Get paid 2 days to maturity. <br />
                                Absolutely free. No hidden charges. <br />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{textAlign: "center"}}>
                        <div style={pageButton}>
                            <NavLink to="/">
                                <button className="" style={unColoredButton}>How it works</button>
                            </NavLink>
                            <NavLink to="/signup">
                                <button className="btn" style={coloredButton}>Create an Account</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
