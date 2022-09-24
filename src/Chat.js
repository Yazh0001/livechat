import React, { useRef, useEffect } from 'react';
import Message from './Message'

export default function Chat({messages}) {

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  });

  return (
    <>
    {messages.map(message=>{ return <Message key={message} text={message} />})}
    <div ref={divRef} />
    </>
  )
}
