import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import heroimg from '../../../public/Imagess/image.png'

const Hero = () => {
  return (
    <div className={`${styles.genhero}`}>

      <div className={`${styles.bgimg}`}>
        <Image
          src={heroimg}
          alt="hero image"
          fill
          className={styles.image} />

        <div className={styles.overlay}></div>

        <div className={styles.herocontent}>
          <h2>
            A world where every woman's voice is heard, valued, and protected.
          </h2>

          <p>Empowering women, advancing equality, and advocating for rights through education, advocacy, and inclusive platforms.</p>

<div className={styles.btns}>
  <a className={styles.btn1} href="#getin">Get Involved</a>
  <a  className={styles.btn2} href="#about">Learn More</a>
  
</div>


        </div>



      </div>


    </div>
  )
}

export default Hero