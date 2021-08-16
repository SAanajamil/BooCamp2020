import React, {useState} from 'react';
import {Message} from './Message'
import './App.css'

function App() {
let [count, setCount]= useState(1);
let [isMorning, setMorning]= useState(true);
  return (
    <div className={`box ${isMorning ? 'daylight' : ""}`}>
      <h3>Day Time = {isMorning ? 'Morning' :'Night' }</h3>
      <Message counter={count} />
      <br />
      <button onClick={()=>setCount(++count)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
    );
}

export default App;
