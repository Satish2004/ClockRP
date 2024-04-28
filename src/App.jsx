import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
var timelelo = new Date().toLocaleTimeString();



const[date , setDate]= useState("");

  const UpdateTimeBtn=()=>{
 
setDate(timelelo);
//  setTimeout(()=>{

// setDate("")
// },2000);


  }
  setInterval(()=>{
    setDate(timelelo)
  },1000);
  
  return (
<>
<h2 className='Time-heading'>{`Time is: ${date}`}</h2>

<button  onClick={UpdateTimeBtn}type="button" className="btn btn-outline-primary">get Time</button>
</>
  )
}

export default App
