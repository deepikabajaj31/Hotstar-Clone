import React from 'react'
import styles from './Header.module.css';
import img from '../assets/images/logo.svg';
import img1 from '../assets/images/home-icon.svg';
const Header=(props)=>{
  return (
    <nav className={styles.Nav}>
        <a className={styles.Logo} href='/'>
            <img src={img} alt=''/>
        </a>
        <div className={styles.NavMenu}>
            <a href='/'>
           <img src={img1}alt=''/>
           <span>HOME</span>
            </a>
            
        </div>
    </nav>
  )
}

export default Header;