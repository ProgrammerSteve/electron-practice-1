import UpSvg from '../assets/images/up.svg'
import React from 'react';
// import { electron } from 'webpack';

const App=()=>{
    const clickHandler=()=>{
        console.log('clicked')
        // electron.notificationApi.sendNotification('custom message')
    }

    const pingHandler=async()=>{
        const response=await window.versions.ping();
        console.log(response);
    }

    return(
        <div className="row">
            <div id="price-container">
                <p className="subtext">{`Current BTC USD`}</p>
                <h1 id="price">Loading...</h1>
            </div>
            <div id="goal-container">
                <p><UpSvg width={20}/><span id="targetPrice" >Choose a Targe Price</span></p>
            </div>
               <div id="right-container">
                <button id="notifyBtn" onClick={pingHandler}>Notify me when..</button>
           </div> 
        </div> 
    )
}
export default App;






