import React from 'react'

export default function Testimonials() {
  return (
    <>
        <div className="container-fluid testimonialContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="subHeaders">What our Customers say about us</h2><hr className="hr_line"/>
                        <p className="subTagline">Read what WC Savers and Investors have to say about our services.</p>
                    </div>
                    <div className="col-md-4 testimonialCard">
                        <figure className="snip1192">
                            <blockquote>At first, I thought it was ridiculous when I heard the "Returns on Savings" to be 14% per annum. I quickly tried and that was it. I just can not find any better offer than WC.</blockquote>
                            <div className="author">
                                <img src="/img/testimonials/7.jpg" alt="sq-sample1"/>
                                <h5>Nicholas Messi</h5>
                            </div>
                        </figure>
                    </div>

                    <div className="col-md-4 testimonialCard">
                        <figure className="snip1192">
                            <blockquote>WC is just the Go to place for your Savings and Investments. 14% on my Savings alone without bank charges is just the plug. I strongly recommend Saving with WC. </blockquote>
                            <div className="author">
                                <img src="/img/testimonials/8.jpg" alt="sq-sample1"/>
                                <h5>Fab Cajoh</h5>
                            </div>
                        </figure>
                    </div>

                    <div className="col-md-4 testimonialCard">
                        <figure className="snip1192">
                            <blockquote>The only song I sing right now is "WC is the way forward for Savings and Investments". The fact that I don't have to do anything but sit and watch my money grow is just it. Go WC!</blockquote>
                            <div className="author">
                                <img src="/img/testimonials/9.jpg" alt="sq-sample1"/>
                                <h5>Martha Mag</h5>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
