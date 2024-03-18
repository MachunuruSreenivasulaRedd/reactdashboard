import React, { Component } from 'react'
import { RiPieChart2Fill } from "react-icons/ri";
import { FaTags } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import './index.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='sideBarContainer'>
            <ul type="none">
                <li className='item'><RiPieChart2Fill />  Dashboard</li>
                <li className='item'><FaTags />  Transactions</li>
                <li className='item'><img src="https://res.cloudinary.com/dollmqugm/image/upload/v1710725377/Vector_1_qewf5s.png" alt="schedule" className="scicon" />Schedules</li>
                <li className='item'><FaRegUserCircle />  Users</li>
                <li className='item'><CiSettings />  Settings</li>
               
            </ul>
            <ul type="none">
            <li className='item'>Help</li>
            <li className='item'>Contact Us</li>
            </ul>
        </div>
      </div>
    )
  }
}
