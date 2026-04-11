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
            A world where every woman's <br />voice is heard, valued, and <br />protected.
          </h2>

          <p>Empowering women, advancing equality, and advocating for rights through <br />education, advocacy, and inclusive platforms.</p>

<div className={styles.btns}>
  <button className={styles.btn1}>Get Involved</button>
  <button className={styles.btn2}>Learn More</button>
</div>


        </div>



      </div>


    </div>
  )
}

export default Hero