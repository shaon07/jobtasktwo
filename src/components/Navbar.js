import React, { useState } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const [show,setShow] = useState(true)
  return (
    <>
      <div className='container-fluid main_nav'>
        <div className='Navbar_sec'>
            <div className='Navbar_Logo'>
                <img src="https://1.bp.blogspot.com/-tz29PgKz-3M/XiBk6dMEkdI/AAAAAAAAEqI/J9ifMws0Z_YLlWlvCLQMhaWEBwtCFZdGQCEwYBhgL/s1600/Mujib%2BBorsho.png" style={{width:"100px"}} alt="mujib"  />
            </div>
            <div className='Navbar_links'>
                <ul>
                    <li>Home</li>
                    <li>Products and Services</li>
                    <li>Become a Client</li>
                    <li>About US</li>
                </ul>
            </div>
            <div className='NavBar_Button'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>

            <div className='navbar_toggler'>
            <i className='fas fa-stream' onClick={()=>setShow(!show)}></i>
            </div>
        </div>

        <div style={{display:show ? "none":"block"}}>
        <div className='Navbar_links2'>
                <ul>
                    <li>Home</li>
                    <li>Products and Services</li>
                    <li>Become a Client</li>
                    <li>About US</li>
                </ul>
            </div>
            <div className='NavBar_Button2'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
