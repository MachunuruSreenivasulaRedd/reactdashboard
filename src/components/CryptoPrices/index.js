import React,{useState,useEffect} from 'react'
import './index.css'

export const CryptoPrices = () => {
    const [pricesList,setPricesList]=useState([])
    const imageList=["https://res.cloudinary.com/dollmqugm/image/upload/t_bgok/v1711587975/euro_wgwzm9.png","https://res.cloudinary.com/dollmqugm/image/upload/t_bgok/v1711587992/gbp_ktftvi.png","https://res.cloudinary.com/dollmqugm/image/upload/t_bgok/v1711587946/dollar_kcfx9i.png","https://res.cloudinary.com/dollmqugm/image/upload/t_bgok/v1711587960/bitcoin_jatg4j.png"]
    let counter = -1
    useEffect(()=>{
        getDetails()
    },[])

    const getDetails= async () => {
        const priceResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const prices = await priceResponse.json()
        const { bpi } = prices
        const { EUR, GBP, USD } = bpi
        setPricesList([EUR, GBP, USD])
    }

  return (
    <div className='currencies'> 
        <div className='bit'>
            <img src={imageList[3]} alt="bitcoin" className='bitcoinimage'/>
            <h1 className="equal">1 bitcoin Equals to</h1>
        </div>
        <div className='currenciesContainer'> 
        {pricesList.map((item,counter)=> (
            <div className='card' key={item.code}>
                <div className='topHeader'>
                    <img src={imageList[counter++]} alt={item.code} className='img'/>
                    <h1>{item.code}</h1>
                </div>
                <p className='name'>{item.description}</p>
                <h3>RS. {item.rate}</h3>
            </div>
        ))}
        </div>
    </div>
  )
}
