import React, { useEffect,useState } from 'react'
import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CryptoPrices } from '../CryptoPrices';
export const Home = props => {
  const {visible} = props
  const [data,setData] = useState([])
  useEffect( ()=> {
    getDetail()
  },[])
  const getDetail = async() => {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    const details=await response.json()
    const {data}=details
    const updatedData = data.map(item => ({
      Population: item.Population/100000,
      Year:item.Year
    }))
    console.log(data)
    setData(updatedData)
   
  }

  return (
    <div className={visible ? 'homeContainer': 'sideHomeContainer'}>
      <div className='chart'>
        <LineChart
          width={300}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 25,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis  dataKey="Year" label={{value:'Year', position: "insideBottomCenter", dy: 15}}/>
          <YAxis dataKey="Population" label={{value:'Population',position: "insideLeft", angle: -90,   dy: 20}}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Population" stroke="green" strokeWidth={4}/>
        </LineChart>
      </div>
      <div className='prices'>
        <CryptoPrices />
      </div>
    </div>
  )
}
