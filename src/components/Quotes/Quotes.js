import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import StyleSheet from './Quotes.module.css'


export class Quotes extends Component {
  render() {
    const settings =  {
      arrowsBlock: false,
      autoplay: true,
      
      centerPadding: 70,
      dots: true,
      duration: 300
    };
    return (
      <div>
        <h1>Inspiring Quotes</h1>
        <Slider { ...settings }>
          <div className={StyleSheet.crs}>
            <img src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/jobs-2.jpg" alt="stevejobs" id={StyleSheet.image}/>
          </div>
          <div className={StyleSheet.crs}>
            
          <img src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/jobs-2.jpg" alt="stevejobs" id={StyleSheet.image}/>
          </div>
          <div className={StyleSheet.crs}>
            
          <img src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/jobs-2.jpg" alt="stevejobs" id={StyleSheet.image}/>
          </div>
          <div className={StyleSheet.crs}>
            
          <img src="https://1zl13gzmcsu3l9yq032yyf51-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/jobs-2.jpg" alt="stevejobs" id={StyleSheet.image}/>
          
          </div>
          
        </Slider>
        


      
		</div>
      
    );
  }
}

export default Quotes