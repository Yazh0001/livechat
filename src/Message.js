import React from 'react'

export default function message({text}) {
  return (
    <div className='message'>
      <div className='username'>{text.username}</div>
      {text.message}
    </div>
  )
}
