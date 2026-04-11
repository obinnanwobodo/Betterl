import React from 'react'
import styles from './Wwd.module.css'
import { GoLaw } from "react-icons/go";
import { TbSchool } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineBank } from "react-icons/ai";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";






const array =[

{
icon:<GoLaw />,
tittle: 'Advocating for Women and Gender \nEquality',
paragraph: "We champion policies and initiatives that promote \nfair treatment and equal opportunities for all \ngenders.",

},

{
icon: <TbSchool />,
tittle: 'Educating and Empowering Women \nand Girls',
paragraph: "Through workshops, mentorship, and skill-\nbuilding, we equip women with tools for success."
},

{
icon: <AiOutlineSafetyCertificate />,
tittle: 'Challenging Gender-Based Barriers',
paragraph: "We confront structural and cultural obstacles that \nlimit women's potential and participation.",

},

{
icon: <AiOutlineBank />,
tittle: 'Policy Advocacy and Equal Rights',
paragraph: "We engage with policymakers to drive legislative \nchanges that protect women's rights.",

},

{
icon: <MdOutlineKeyboardVoice />,
tittle: "Amplifying Women's Voices and Stories",
paragraph: "We create platforms for women to share their \nexperiences and inspire others.",

},

{
icon: <LuBookOpen />,
tittle: "Promoting Gender Awareness and \nEducation",
paragraph: "We raise awareness about gender issues through \ncampaigns, research, and community dialogues.",

},



]







const Wwd = () => {
  return (
    <div className={`${styles.wwdgen}`}>

<h2 className={styles.ow}>OUR WORK</h2>

<h3 className={styles.what}>What We Do</h3>


{/* MAPPING */}

<div className={`${styles.mappinggen}`}>

{array.map((each, index)=>(

<div key={index} className={`${styles.eachofthem}`}>

<div className={`${styles.icn}`}>{each.icon}</div>
<h2 className={`${styles.tittle}`}   style={{whiteSpace: 'pre-line'}}>{each.tittle}</h2>
<p className={`${styles.para}`} style={{whiteSpace: 'pre-line'}}>{each.paragraph}</p>
</div>



))}
</div>






    </div>
  )
}

export default Wwd