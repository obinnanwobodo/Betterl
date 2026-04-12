import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import styles from './Contact.module.css'








const Contact = () => {
    return (
        <div className={`${styles.contactgen}`}>

            <h2 className={`${styles.reach}`}>Reach Out</h2>
            <h3 className={`${styles.cu}`}>Contact Us</h3>



            <div className={`${styles.detailndform}`}>


                <div className={`${styles.detail}`}>



                    <div className={`${styles.phone}`}>
                        <div><IoCallOutline /></div>
                        <div className={`${styles.po}`}>
                            <h2>Phone</h2>
                            <p>07086226676</p>
                        </div>
                    </div>


                    <div className={`${styles.email}`}>
                        <div><AiOutlineMail /></div>
                        <div className={`${styles.ei}`}>
                            <h2>Email</h2>
                            <p>Betterlifegendercare@gmail.com</p>
                        </div>
                    </div>


                    <div className={`${styles.address}`}>
                        <div><CiLocationOn /></div>
                        <div className={`${styles.an}`}>
                            <h2>Address</h2>
                            <p>No. 5, George Akume Way, Karu Site by Yoruba Mosque, Abuja, FCT, <br />Nigeria</p>
                        </div>
                    </div>




                </div>



                {/* FORM */}


                <form className={`${styles.formgen}`} action="">


                    <div className={`${styles.namegen}`}>
                        <h2>Name</h2>
                        <input type="text" placeholder='Your name' />
                    </div>

                    <div className={`${styles.emailgen}`}>
                        <h2>Email</h2>
                        <input type="text" placeholder='Your email' />
                    </div>

                    <div className={`${styles.messagegen}`}>
                        <h2>Message</h2>
                      <textarea placeholder="Your message"></textarea>
                    </div>


                    <button>Send Message</button>
                </form>



            </div>





        </div>
    )
}

export default Contact