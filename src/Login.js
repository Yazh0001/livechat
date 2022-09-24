import React, { useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Login = () => {
    const [logName, setLogName] = useState()
    const [logPassword, setLogPassword] = useState()
    const [msgClass, setMsgClass] = useState('valid')
    const navigate = useNavigate()

    function handleLogin(e){
        if(!logName  || !logPassword) return
        const text = logName
        // add axios stuff
        axios.post('http://127.0.0.1:5000/login',{'username': logName, 'password': logPassword}).then((response)=>{
            if (response.data === 'success') {
                window.localStorage.setItem('username', text )
                navigate('/chat')
            }
            else setMsgClass('invalid')
        })
        
      }

    return (

        <div className='card'>
            <div className={msgClass}>Incorrect username or password</div>
            <input className='signupInput' onChange={(e)=>setLogName(e.target.value)} placeholder='Username'/>
            <input className='signupInput' onChange={(e)=>setLogPassword(e.target.value)} placeholder='Password'/>
            <button onClick={handleLogin}> Log in</button>
        </div>
    );
}
 
export default Login;