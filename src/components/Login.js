import styles from './Login.module.css';
import React from 'react'

const Login=(props)=>{
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.CTA}>
            <img className={styles.CTALogoOne}src="../assets/images/cta-logo-one.png" alt=""/>
          </div>
            <div className={styles.BgImage}></div>
        </div>
    </section>

  )
}


export default Login