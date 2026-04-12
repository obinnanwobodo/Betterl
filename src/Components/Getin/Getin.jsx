import React from 'react'
import styles from './Getin.module.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { MdOutlineCampaign } from "react-icons/md";





const array =[

{
icon:<IoMdHeartEmpty />,
tittle: "Volunteer With Us",
paragraph: "Dedicate your time and skills to support our programs and initiatives on the ground.",
learn: "Learn More →"

},
{
icon:<FaRegHandshake />,
tittle: "Partner With Us",
paragraph: "Collaborate with us as an organization, institution, or corporate partner to amplify impact.",
learn: "Learn More →"

},
{
icon:<IoGiftOutline />,
tittle: "Support Our Work",
paragraph: "Your financial contributions help us sustain programs, reach more women, and scale our \nimpact.",
learn: "Learn More →"

},
{
icon:<LuPenLine />,
tittle: "Share Your Story",
paragraph: "Your lived experience can inspire change. Share your story to help amplify women's voices.",
learn: "Learn More →"

},
{
icon:<MdOutlineCampaign />,
tittle: "Be an Advocate",
paragraph: "Use your platform and influence to champion gender equality in your community and beyond.",
learn: "Learn More →"

},



]







const Getin = () => {
  return (
    <div className={`${styles.getingen}`}>
        
<h2 className={`${styles.ta}`}>TAKE ACTION</h2>
<h3 className={`${styles.gi}`}>Get Involved</h3>



{/* mapping */}


<div className={`${styles.mappinggen}`}>

{array.map((each, index) =>(

<div key={index} className={styles.eachofthem}>

<div className={`${styles.icn}`}>{each.icon}</div>
<h2 className={`${styles.tittle}`}>{each.tittle}</h2>
<h3  className={`${styles.para}`} style={{whiteSpace: 'pre-line'}}>{each.paragraph}</h3>
<a className={`${styles.learn} ${index === 2 || index === 3 || index === 4 ? styles.specialLearn : "" }`}href="#contact">{each.learn}</a>
</div>


))}

</div>


    </div>
  )
}

export default Getin