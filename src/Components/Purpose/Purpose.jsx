import React from 'react'
import styles from './Purpose.module.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuTarget } from "react-icons/lu";




const array = [


    {
        icon: <MdOutlineRemoveRedEye />,
        tittle: 'Our Vision',
        paragraph: 'A society where women and girls enjoy equal rights, opportunities, dignity, and freedom from discrimination, regardless of background or circumstance.'

    }
    ,

    {
        icon: <LuTarget />,
        tittle: 'Our Mission',
        paragraph: "To advocate for gender equality and women's rights through education, empowerment, policy engagement, and inclusive platforms that amplify women's voices and lived experiences."

    }




]





const Purpose = () => {
    return (
        <div className={`${styles.purposegen}`}>

            <h2 className={`${styles.ppo}`}>Purpose</h2>

            <h3 className={`${styles.vis}`}>Vision & Mission</h3>





            <div className={styles.mappinggen}>

                {array.map((each, index) => (

                    <div
  key={index} className={`${styles.eachofthem} ${ index === 1 ? styles.missionCard : ""}`}>

                        <div className={styles.icon}>
                            {each.icon}
                        </div>

                        <h2 className={styles.tittle}>
                            {each.tittle}
                        </h2>

                        <p className={styles.para} style={{ whiteSpace: "pre-line" }}>
                            {each.paragraph}
                        </p>


                    </div>


                ))}






            </div>




        </div>
    )
}

export default Purpose