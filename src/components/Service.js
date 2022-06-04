import React from 'react'
import '../styles/Service.css'

const Service = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container text-center py-5'>
            <h2 style={{fontSize:"4rem"}}>Our Services</h2>
            <div className='row text-center py-5 justify-content-center'>
                <div className='service_box col-12 col-md-3 m-3 py-5'>
                    <h2 style={{marginBottom:"3rem"}}>About Us</h2>
                    <div className='service_text'>
                        <ul>
                            <li>Capital and Profile</li>
                            <li>Mission and Vision</li>
                            <li>Board of Director</li>
                            <li>Management and Executive</li>
                            <li>Circulation</li>
                        </ul>
                    </div>
                </div>
                <div className='service_box col-12 col-md-3 m-3 py-5'>
                    <h2 style={{marginBottom:"3rem"}}>Product and Services</h2>
                    <div className='service_text'>
                        <ul>
                            <li>Issue Management</li>
                            <li>Coppertech Industry</li>
                            <li>Oimax Electrode LTD</li>
                            <li>Zaheen Spinning LTD</li>
                            <li>IPO Result</li>
                        </ul>
                    </div>
                </div>
                <div className='service_box col-12 col-md-3 m-3 py-5'>
                    <h2 style={{marginBottom:"3rem"}}>Become a Client</h2>
                    <div className='service_text'>
                        <ul>
                            <li>Bangladeshi Indivisual</li>
                            <li>Bangladeshi Institution</li>
                            <li>Foreign Investor</li>
                            <li>NRBs</li>
                            <li>Daily Market Commentry</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Service
