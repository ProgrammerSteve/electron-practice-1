import UpSvg from '../assets/images/up.svg'
import React, {useEffect, useRef, useState} from 'react';

const btcUrl='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD'

const App=()=>{
    const intervalRef = useRef(null);
    const [loading,setLoading]=useState(true)
    const [price,setPrice]=useState(0)
    const getBtc=async()=>{
        try{
            const resp=await fetch(btcUrl)
            const data=await resp.json()
            setPrice(data.BTC.USD)
            console.log('price: ',data.BTC.USD)
        }catch(e){
            console.log(e)
            setPrice(-1)
        }
    }
    const addHandler=async()=>{
        try{
          const response=await window.versions.addWindow(); 
          console.log(response); 
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getBtc();
        const myInterval = setInterval(()=>{getBtc()},10000)
        intervalRef.current = myInterval
        setLoading(false)
        return(clearInterval(intervalRef.current))
    },[])
    return(
        <div className="row">
            <div id="price-container">
                <p className="subtext">{`Current BTC USD`}</p>
                {!loading?<h1 id="price">{price}</h1>:<h1 id="price-loading">Loading...</h1>}
            </div>
            <div id="goal-container">
                <p><UpSvg width={20}/><span id="targetPrice" >Choose a Targe Price</span></p>
            </div>
               <div id="right-container">
                <button id="notifyBtn"  onClick={addHandler}>Notify me when..</button>
           </div> 
        </div> 
    )
}
export default App;






