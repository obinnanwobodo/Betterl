"use client"


import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../../public/Images/photo_2026-04-10_22-41-29.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.gennav}>
      <div className={styles.logogen}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>
        <div className={styles.bgc}>
          <h2>Betterlife</h2>
          <p>Gender care Foundation</p>
          <h3>Compassion. Equity. Hope.</h3>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
        <span className={isOpen ? styles.barOpen : ""}></span>
      </div>

      <div className={`${styles.navlinks} ${isOpen ? styles.active : ""}`}>
        <a className={styles.l1} href="#" onClick={() => setIsOpen(false)}>Home</a>
        <a className={styles.l2} href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a className={styles.l3} href="#wwd" onClick={() => setIsOpen(false)}>What We Do</a>
        <a className={styles.l4} href="#getin" onClick={() => setIsOpen(false)}>Get Involved</a>
        <a className={styles.l5} href="#contact" onClick={() => setIsOpen(false)}>Contact</a>



      </div>

      <div className={`${styles.donate} ${styles.desktopDonate}`}>
        <a href="#getin">Donate</a>
      </div>
    </nav>
  )
}

export default Navbar