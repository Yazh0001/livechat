import React, { useEffect, useRef} from 'react'
import Chat from './Chat'
import { io } from 'socket.io-client'
const socket = io("http://127.0.0.1:5000");


const Chatpage = ({messages, updateMessages}) => {
    
    const messageRef = useRef()
    const username = window.localStorage.getItem('username')

    
    
    useEffect(()=>{
    socket.on("receive message", (data)=>{
        console.log(data.message)
        updateMessages(m=>{return [...m, data.message]})
        })
    }, [updateMessages])


    function handleSend(e) {
        if (e.key !== "Enter") return
        const text = messageRef.current.value
        if (text === '') return
        socket.emit('send message', {'username': username, 'message': text})
        updateMessages(m=>{return [...m, {'username': username, 'message': text}]})
        messageRef.current.value = null
    
      }

    return ( 
        <div className='total'>
            <div className='chatbox'>
                <Chat className='chat' messages = {messages}/>
            </div>
            <div className='bot'>
                <input className='chatInput' onKeyDown={handleSend} ref={messageRef} type='text' placeholder='Enter a message...'/>
            </div>
        </div>
     );
}
 
export default Chatpage;