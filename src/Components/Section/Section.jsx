import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <div className='section'>
      
            <h1>SIGNATURE STROKES</h1>
            <div className='section-box'>
                <div className='section-card1'>
                    <ul>
                        <li>Equity</li>
                        <li>Equity,Currency & Commodity <br /> Derivation</li>
                        <li>Margin Trade Facility (SEBI <br />MTF)**</li>
                        <li>U.S Investing^^</li>
                        <li>Insurance (Life,Health & Motor) <br /> ^</li>
                        <li>ESOP Fundingp <span style={{fontSize:'18px',position:'relative',top:'-10px'}}>##</span></li>
                    </ul>
                </div>
                <div className='section-card2'>
                    <ul>
                        <li>Distibution of Public Offering & Structured Products<span style={{fontSize:'18px',position:'relative',top:'-10px'}}>#</span></li>
                        <li>Distibution of Fixed Income Products & Mutal Funds</li>
                        <li>Margin Trade Finacing<span style={{fontSize:'18px',position:'relative',top:'-10px'}}>##</span></li>
                        <li>Loan Agaist Securities<span style={{fontSize:'18px',position:'relative',top:'-10px'}}>##</span></li>
                        <li>Stocks Lending & Borrowing Schemes</li>
                    </ul>
                </div>
            </div>
            <h1>BATTING GEAR</h1>
            <div className='section-box'>
                <div className='section-card1'>
                    <ul>
                        <li>BlindTrade-High Speed Trading <br /> Platform</li>
                        <li>Acess to Portfolio Optimizer</li>
                        <li>Assistance & Acess to All <br /> Reports on WhatsApp</li>
                        <li>Timely Alerts and Updates</li>
                    </ul>
                </div>
                <div className='section-card2'>
                    <ul>
                        <li>Centralized Customer Services <br /> Desk</li>
                        <li>Dedicated Relationship Manager</li>
                        <li>Market Updates & Research <br /> Reports</li>
                        <li>Investment Basket</li>
                    
                    </ul>
                </div>
            </div>
            <div className='section-card3'>
                <h2>So gear up and <span style={{borderBottom:'2px solid #EE1F42'}}>Register Now</span></h2>
                <div>WhatsApp “Hi” on +91 9137855598 or Call us on +91 8045025739 </div>
                <div>or</div>
                <div>Email us on <span style={{borderBottom:'2px solid'}}>onlinesupport@jmfl.com</span> </div>
            </div>
    </div>
  )
}

export default Section