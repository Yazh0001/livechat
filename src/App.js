import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Chatpage from './Chatpage'
import './App.css'
import { io } from 'socket.io-client'
const socket = io("http://127.0.0.1:5000");


function App() {
  const [messages, updateMessages] = useState([])

  useEffect(()=>{
    socket.on("connection success", (data)=>{
      updateMessages(m=>{return data.logs})
    })
  },[])

  return (
    <Router>
      
      <Routes>
        <Route path='/chat' element={<Chatpage messages={messages} updateMessages={updateMessages}/>}/>      
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      
    </Router>
    
  )
}

export default App;
