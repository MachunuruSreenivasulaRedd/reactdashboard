import React, { Component } from 'react'
import { RiPieChart2Fill } from "react-icons/ri";
import { FaTags } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart,Pie} from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
]

export default class Dashboard extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='sideBarContainer'>
            <ul type="none">
                <li className='item'><RiPieChart2Fill />  <span className='i'>Dashboard</span></li>
                <li className='item'><FaTags /> <span className='i'>Transactions</span></li>
                <li className='item'><SlCalender /><span className='i'>schedules</span></li>
                <li className='item'><FaRegUserCircle /> <span className='i'>Users</span></li>
                <li className='item'><CiSettings />  <span className='i'>Settings</span></li>
               
            </ul>
            <ul type="none">
            <li className='item'>Help</li>
            <li className='item'>Contact Us</li>
            </ul>
        </div>
        <div className='contentContainer'>
          <div className='statsContainer'>
            <div className='first'>
              <div className='icon'><FaDownload /></div>
              <p>Total Revenues</p>
              <h3>$5,25,000</h3>
            </div>
            <div className='second'>
            <div className='icon'><FaTags /></div>
              <p>Total Transactions</p>
              <h3>$2,900</h3>
            </div>
            <div className='third'>
            <div className='icon'><BiLike /></div>
              <p>Total Likes</p>
              <h3>$10,000</h3>
            </div>
        
            <div className='fourth'>
            <div className='icon'><BsPeople/></div>
              <p>Total Users</p>
              <h3>$1,002</h3>
            </div>
            </div>
            <div className='chartContainer'>
            <LineChart width={730} height={180} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
            </div>
            <div className='detailsContainer'>
              <div className='pieChartContainer'>
              <PieChart width={400} height={200}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
              </div>
              <div className='scheduleContainer'>
                <div className='1'>
                  <h3>Meeting for pages checkup</h3>
                  <p>at sunset hyderabad</p>
                </div>
                <div className='2'>
                <h3>Check payment status to farmers</h3>
                  <p>at sunset hyderabad camp office</p>
                </div>
              </div>
            </div>
            </div> 
            </div>
        

    )
  }
}
