import React, { Component } from 'react';
import Chart from "react-apexcharts";

class GaugeChart extends Component {
    
    state = {
        series: [70],
            options: {
              chart: {
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  fill: "#fc0",
                  hollow: {
                    size: '70%',
                  }
                },
              },
              fill: {
                colors: ['#fc0']
              },
              labels: ['6000 تومان'],
            },
          
          
          };
  
    render() {
  
      return (
        <div style={{width: 250, height: 250}} className="radialBar">
          <Chart options={this.state.options} series={this.state.series} type="radialBar"/>
        </div>
      );
    }
}
 
export default GaugeChart;