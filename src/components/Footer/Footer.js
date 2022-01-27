import React, {useState} from "react";
import axios from 'axios'
import styles from './Footer.module.css'
import './Footer.css'

const Footer = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const changeInput =(e)=>{
        e.preventDefault();
        setMessage(e.target.message.value);
        setActive1(false);
        setActive2(true);
        
  }
  const changeInput2 =(e)=>{
        e.preventDefault();
        setName(e.target.name.value);
        setActive1(false)
        setActive2(false);
        setActive3(true);
        
  }
  const handleSubmit =(e)=>{
        e.preventDefault();
        
        setActive3(false);
        document.getElementById('afterS').innerHTML=`<span id='animate'>Thanks for the message ${name}!!</span>`
        

        const data={
          name: name,
          email: e.target.identity.value,
          message: message
      }
      //console.log(data);
      axios({
        url: 'https://shubhamkumbhakar-server.herokuapp.com/api/save',
        method: 'POST',
        data: data
      })
         .then(()=>{
            console.log('Data Sent!!');
         })
         .catch(()=>{
             console.log('Server Error');
         })
  }
  return (
    <div id="contact">

        <div id="feedback">


        <form onSubmit={changeInput} className={active1 ? "show" : "nshow"}>
           <label>What do you feel? Send me a Message..</label><br/><br/>
          <input type='text' required placeholder="Type your message here.." name="message"/>
          <button>Next</button>
         </form>


        <form onSubmit={changeInput2} className={active2 ? "show" : "nshow"}>
           <label>What's your name?</label><br/><br/>
          <input type='text' required placeholder="Type your name here.." name="name" id="i1"/>
          <button>Next</button>
         </form>



         <form onSubmit={handleSubmit} className={active3 ? "show" : "nshow"}>
           <label>What's your email? <small>(optional)</small></label><br/><br/>
          <input type='email' placeholder="email" name="identity" id="i2"/>
          <button>Submit</button>
         </form>
         <p id="afterS"></p>


        </div>
         


            <footer className={styles.container}>
            
                
                <div className={styles.txt}>
                    
                <h1>Connect with me</h1>
                <h1>You can also find me on</h1><br/><br/>
                <span>
                  <a href="https://www.linkedin.com/in/shubhamkumbhakar/" target="_blank" rel="noopener noreferrer"><img src="https://krueger.ca/wp-content/uploads/2016/02/linkedin-logo.png" alt='logo' className={styles.icons}/></a>
                  <a href="https://www.instagram.com/shubhamkumbhakar/" target="_blank" rel="noopener noreferrer"><img src="https://freepngimg.com/thumb/logo/62372-computer-neon-instagram-icons-hd-image-free-png.png" alt='logo' className={styles.icons} style={{width:'20px'}}/></a>
                  <a href="https://twitter.com/Shubham_0208" target="_blank" rel="noopener noreferrer"><img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png" alt='logo' className={styles.icons}/></a>
                  <a href="https://github.com/shubhamkumbhakar" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt='logo' className={styles.icons}/></a>
                  <a href="https://codeforces.com/profile/shubhamkumbhakar" target="_blank" rel="noopener noreferrer"><img src="https://lh3.googleusercontent.com/zaldniLc2XTBhNlCDR4hcD5bcRYHZ56_lO0yA2Qu-cADShy1_HDWrICSvv0EPTX79WY" alt='logo' className={styles.icons}/></a>
                  <a href="https://www.youtube.com/watch?v=uJalILx6gJQ&t=9s" target="_blank" rel="noopener noreferrer"><img src="https://purepng.com/public/uploads/large/youtube-icon-ssj.png" alt='logo' className={styles.icons} style={{transform:'translateY(-3px)'}}/></a>
                  <a href="https://in.pinterest.com/shubhamkumbhakar/_saved/" target="_blank" rel="noopener noreferrer"><img src="https://www.wblibrary.org/site-assets/images/pinterest-logo/@@images/image.png" alt='logo' className={styles.icons}/></a>
                  <a href="mailto:shubhamkumbhakar27@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://seeklogo.com/images/G/gmail-new-2020-logo-32DBE11BB4-seeklogo.com.png" alt='logo' className={styles.icons}/></a>
                </span>
                <br/><br/>
                </div>
            </footer>
        </div>
  );
}

export default Footer;