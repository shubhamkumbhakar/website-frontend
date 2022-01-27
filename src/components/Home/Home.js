import React from 'react'
import Typical from 'react-typical'
import styles from './Home.module.css'
//import play2 from './play2.gif'
const l = '< ' 
const r = ' />'

const Home = () => {
    return (
        <div id="home">
            <header className={styles.Appheader}>
            <br/><br/>
                {/* <img src={play2} className={styles.Applogo} alt="logo" /> */}
                <span className={styles.loading}>
                    <div className={styles.left}><b>{l}</b></div>
                    <div className={styles.main}> Hello, World! </div>
                    <div className={styles.right}><b>{r}</b></div>
                </span>
                <div className={styles.txt}>
                    <br/><br/><p className={styles.iam}>I'm</p>
                 <h1 className={styles.name}>Shubham Kumbhakar</h1>
                <p className={styles.typical}>
                I am <Typical loop={Infinity} wrapper="b" steps={['a Programmer.', 1800, 'an Engineer.', 1800, 'a Developer.', 1800,'an Artist.', 1800, 'a proud Indian.', 1800]}/>
                </p>
                </div><br/>
                
            </header>
        </div>
    )
}

export default Home
