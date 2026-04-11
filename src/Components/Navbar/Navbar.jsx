import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../../public/Images/photo_2026-04-10_22-41-29.jpg'

const Navbar = () => {
  return (
    <div className={`${styles.gennav}`}>

      <div className={`${styles.logogen}`}>

        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Betterlife Logo"
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.bgc}`}>
          <h2>Betterlife</h2>
          <p>Gender care Foundation</p>
          <h3>Compassion. Equity. Hope.</h3>

        </div>


      </div>

      <div className={`${styles.navlinks}`}>
        <a className={`${styles.l1}`} href="#">Home</a>
        <a className={`${styles.l2}`} href="#about">About</a>
        <a className={`${styles.l3}`} href="#wwd">What We Do</a>
        <a className={`${styles.l4}`} href="#get">Get Involved</a>
        <a className={`${styles.l5}`} href="#contact">Contact</a>
      </div>


      <div className={`${styles.donate}`}>
      <a href="#donate">  <button>Donate</button></a>
      </div>

    </div>
  )
}

export default Navbar