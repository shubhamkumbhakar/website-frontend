import React, { Component } from 'react'
//import styles from './Navbar.module.css'
import {FaAlignJustify} from 'react-icons/fa'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import {Link} from 'react-scroll'



export class Navbar extends Component {
 

  constructor(props) {
    super(props)

    this.state = {
         isOpen: false
    }
}


scrollHandler=()=>{
  console.log('abcd')
}


handleToggle=()=>{
    this.setState({
        isOpen: !this.state.isOpen
    })
}
offToggle=()=>{
    this.setState({
        isOpen: false
    })
}
 
  render() {
    let scroll1 = window.pageYOffset;
    
    window.onscroll = function(){
          let scroll2 = window.pageYOffset;
          let h = document.querySelector('#ho')
          if(scroll1<300)
                h.innerHTML=""
          else
                h.innerHTML="Home"


          if(scroll1 > scroll2){
            document.querySelector('nav').style.top= "0";
          }
          else{
            document.querySelector('nav').style.top= "-50px";
          }
          scroll1 = scroll2;
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
            <Link to="home" className="Home" id="ho" onClick={this.offToggle} smooth={true} duration={800}>
              
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignJustify className="nav-icon"/>
            </button>
            </div>
            <ul className={this.state.isOpen ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, index)=>{
                return(
                  <li key={index}>
                  <Link className={item.cName} to={item.url} onClick={this.handleToggle} smooth={true} duration={800}>
                  {item.title}
                  </Link>
                  </li>
                )
            })}
          </ul>
            </div>
        </nav>
    )
  }

}

export default Navbar
