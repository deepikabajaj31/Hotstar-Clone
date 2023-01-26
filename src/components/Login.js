import styles from './Login.module.css';
import React from 'react'
import img from '../assets/images/cta-logo-one.svg';
import img1 from '../assets/images/cta-logo-two.png';

const Login=(props)=>{
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.CTA}>
            <img className={styles.CTALogoOne}src={img} alt=""/>
            <a className={styles.SignUp} href='/'>GET ALL THERE</a>
            <p className={styles.Description}> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</p>
            <img className={styles.CTALogoTwo}src={img1} alt=''/>
          </div>

            <div className={styles.BgImage}></div>
        </div>
    </section>

  )
}


export default Login