import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const Signup = () => {
    const [signName, setSignName] = useState()
    const [signPassword, setSignPassword] = useState()
    const [msgClass, setMsgClass] = useState('valid')
    const navigate = useNavigate()

    const handleSignup = ()=>{
        if(!signName  || !signPassword) return
        axios.post('http://127.0.0.1:5000/signup',{'username': signName, 'password': signPassword}).then(function (response){
            if (response.data === 'success') {navigate('/')}
            else setMsgClass('invalid')
            
        })
        
        
    }

    return ( 
        <div className='card'>
            <div className={msgClass}>Username already taken</div>
            <input className='signupInput' onChange={(e)=>setSignName(e.target.value)} placeholder='Choose a username'/>
            <input className='signupInput' onChange={(e)=>setSignPassword(e.target.value)} placeholder='Choose a password'/>
            <button onClick={handleSignup}> Sign up!</button>
        </div>

     );
}
 
export default Signup;
