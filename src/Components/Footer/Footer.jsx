import React from "react";
import styles from "./Footer.module.css";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import Link from "next/link";







const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        {/* LEFT */}
        <div className={styles.footerCol}>
          <h2 className={styles.logo}>
            Betterlife Gender Care Foundation
          </h2>

          <p className={styles.desc}>
            Advancing gender equality and empowering women and girls across Nigeria and beyond.
          </p>
        </div>

        {/* MIDDLE */}
        <div className={styles.footerCol}>
          <h3 className={styles.title}>Quick Links</h3>

          <ul className={styles.links}>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#getin">Get Involved</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.footerCol}>
          <h3 className={styles.title}>Follow Us</h3>

          <div className={styles.socials}>
            <a href="#" target="_blank"
              rel="noopener noreferrer" className={styles.icon}>
              <SlSocialFacebook />

            </a>

            <a href="#" target="_blank"
              rel="noopener noreferrer" className={styles.icon}>
              <CiTwitter />

            </a>

            <a href="#" target="_blank"
              rel="noopener noreferrer" className={styles.icon}>
              <CiInstagram />

            </a>

            <a href="#" target="_blank"
              rel="noopener noreferrer" className={styles.icon}>
              <FiLinkedin />

            </a>
          </div>
        </div>

      </div>

      <div className={styles.divider}></div>

      <p className={styles.copy}>
        © 2026 Betterlife Gender Care Foundation... All rights reserved.
      </p>

    <h2 className={styles.devtext}>
  Need a website?{" "}
  <a
    href="https://wa.me/2349024982829"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.devlink}
  >
    Let’s talk
  </a>
</h2>

    </footer>
  );
};

export default Footer;