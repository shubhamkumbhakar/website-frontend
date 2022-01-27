import React, { Component } from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export class Chart extends Component {
    render() {
         const {captions, data} = this.props
          return(
            <div>
              <h1 className="shead">Development</h1>
              <RadarChart
                  captions={captions}
                  data={data}
                  size={300}
               />
              </div>
          );
        
    }
}

export default Chart
