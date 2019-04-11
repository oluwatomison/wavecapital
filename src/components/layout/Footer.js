import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className="container-fluid mainFooterContainer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 footerContainer">
                        <div><h6 className="footerHeading">Company</h6></div>
                        <div>
                            <ul className="footerItems">
                                <li><NavLink to="/about-us">About Us</NavLink></li>
                                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/faqs">FAQs</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 footerContainer">
                        <div><h6 className="footerHeading">Products</h6></div>
                        <div>
                            <ul className="footerItems">
                                <li><NavLink to="/features">Features</NavLink></li>
                                <li><NavLink to="/blog">Mobile App</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 footerContainer">
                        <div><h6 className="footerHeading">Legal</h6></div>
                        <div>
                            <ul className="footerItems">
                                <li><NavLink to="/about-us">Privacy Policy</NavLink></li>
                                <li><NavLink to="/testimonials">Terms and Conditions</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3 footerContainer">
                        <div><h6 className="footerHeading">Connect with us</h6></div>
                        <div>
                            <ul className="footerItems">
                                <div className="socialMedia">
                                    <li><NavLink to=""><i className="fab fa-twitter"></i></NavLink></li>
                                    <li><NavLink to=""><i className="fab fa-facebook"></i></NavLink></li>
                                    <li><NavLink to=""><i className="fab fa-instagram"></i></NavLink></li>
                                </div>
                                <div style={{marginTop: 20 + 'px'}}>
                                    <li><NavLink to="">info@wavecapital.com</NavLink></li>
                                    <li><NavLink to="">+234 903 898 2188</NavLink></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
