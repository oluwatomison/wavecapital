import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/img/1.jpg)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    opacity: "0.9",
    padding: "14px"
}
const signUpStyle = {
    border: "1px solid #3848f3",
    borderRadius: "50px",
    background: "linear-gradient(to right top, #3848f3, #3241d8, #2d3bbe, #2834a5, #242d8c)"
}

const Navbar = () => {
    return (
        <div style={style}>
            <nav className="navbar navbar-expand-lg mainNavbar">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <h3 className="mainNavbarBrand"><strong> Wave Capital</strong></h3>
                    </NavLink>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto mainNavbarItems">
                            <li className="nav-item active">
                                <NavLink to="/about-us" className="nav-link">About Us</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/features" className="nav-link">Why choose us</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/faqs" className="nav-link">FAQs</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to="/signup" className="nav-link" style={signUpStyle}>Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar