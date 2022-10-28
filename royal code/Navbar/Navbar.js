import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    
    <>
       <header>
           {/* <img src="https://codetheweb.blog/assets/img/icon2.png" /> */}
            <nav>
                <ul>
                    <li><Link to='/'><a href="#">Home</a></Link></li>
                    <li><Link to='/'><a href="#">Profile</a></Link></li>
                    <li><Link to='/form'><a href="#">Post</a></Link></li>
                    <li><Link to='/'><a href="#">Wishlist</a></Link></li>
                    <li><Link to='/'><a href="#">Contact</a></Link></li>
                </ul>
            </nav>
        </header> 
    </>  

  )
}

export default Navbar