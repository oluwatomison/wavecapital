import React from 'react'

export default function Instructions() {
  return (
    <>
        <div className="container-fluid instructionContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mainHeaders">How it works</h2><hr className="hr_line"/>
                        <p className="mainTagline">In three simple steps, you can kick off with WC and watch your money grow.</p>
                    </div>
                    <div className="col-md-4 instructionCard">
                        <div className="mainIcon"><i className="far fa-user-circle"></i></div>
                        <h4 className="instructionCardHeader">Setup your Account</h4>
                        <p className="instructionCardText">Create your Account using your email and phone number. For security purposes, we verify your email address.</p>
                    </div>
                    <div className="col-md-4 instructionCard">
                        <div className="mainIcon"><i className="far fa-credit-card"></i></div>
                        <h4 className="instructionCardHeader">Choose a Plan</h4>
                        <p className="instructionCardText">Link your debit card to your account, specify your starting amount and how often you want to save.</p>
                    </div>
                    <div className="col-md-4 instructionCard">
                        <div className="mainIcon"><i className="fas fa-chart-line"></i></div>
                        <h4 className="instructionCardHeader">Watch your Savings grow</h4>
                        <p className="instructionCardText">We'll take off from here. We put your money to work to enable you have the best returns on your Savings daily.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
