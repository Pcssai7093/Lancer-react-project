import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <>
        <section className='footer'>
        <div className='social'>
            <a href="#"><i className='fa fa-instagram'></i></a>
            <a href="#"><i className='fa fa-twitter'></i></a>
            <a href="#"><i className='fa fa-facebook'></i></a>
        </div>

        <ul className='list'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className='copyright'>Lancer @ 2022</p>
        </section>
    </>
  )
}

export default Footer;