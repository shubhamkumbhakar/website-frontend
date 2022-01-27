import React from 'react'
import styles from './AboutMe.module.css'
import pp from './pp.jpeg'

const AboutMe = () => {
    return (
        <div id="about">
        
        <div id={styles.divspacing}></div>
        <div className={styles.about}>
            
            <div id={styles.div1}>
                <img src={pp} alt="me" id={styles.aimg}/>
                <h2  className="headT" style={{fontSize:'30px'}}>About Me</h2>
            </div>
            <div id={styles.div2}>
              <p id={styles.para}>Hi, I am Shubham Kumbhakar, a graduate engineer from IIT-BHU, residing in Dhanbad, India. I believe, I am a good problem-solver with passion towards future technologies and innovations. Currently contributing to a Digital Healthcare organization to make a positive impact on country's Wellness.
               Feel free to connect with me. I am always excited to have constructive conversations. </p>
            </div>
        </div>
        </div>    
    )
}

export default AboutMe
