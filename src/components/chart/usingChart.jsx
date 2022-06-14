import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'نمودار میزان مصرف کل',
      },
    }
  };
  
  const labels = ['3/9', '3/12', '3/15', '3/18', '3/21', '3/24', '3/27'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'میزان مصرف (هزار تومان)',
        data: [500, 1000, 1500, 700, 3000, 7000, 5000],
        borderColor: 'rgb(255, 204, 0)',
        fill: true,
        backgroundColor: 'rgba(255, 204, 0, 0.5)',
        tension: 0.5,
      },
    ],
  };

class UsingChart extends Component {
    state = {  } 
    render() { 
        defaults.font.family = 'Vazir';
        return (
            <Line options={options} data={data} height={110} />
        );
    }
}
 
export default UsingChart;