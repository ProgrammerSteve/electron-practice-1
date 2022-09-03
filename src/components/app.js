import UpSvg from '../assets/images/up.svg'
import React from 'react';
// import { electron } from 'webpack';

const App=()=>{
    // const clickHandler=()=>{
    //     console.log('clicked')
    //     // electron.notificationApi.sendNotification('custom message')
    // }
    return(
        <div className="row">
            <div id="price-container">
                <p className="subtext">Current BTC USD</p>
                <h1 id="price">Loading...</h1>
            </div>
            <div id="goal-container">
                <p><img src={UpSvg}/><span id="targetPrice">Choose a Targe Price</span></p>
            </div>
 
        </div> 
    )
}
export default App;






        //    <div id="right-container">
        //         <button id="notifyBtn" onClick={clickHandler}>Notify me when..</button>
        //     </div> 