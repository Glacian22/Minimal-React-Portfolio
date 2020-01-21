import React, { useState } from 'react'
import './style.css'

export default function Contact (props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  let handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div id='contact'>
      contact
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>
          Contact
          <textarea id='name' value={name} onChange={(event) => setName(event.target.value)} />
          <textarea id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <textarea id='message' value={message} onChange={(event) => setMessage(event.target.value)} />
          <br />
        </label>
        <input type='submit' value='submit' id='submitbtn' />
      </form>
    </div>
  )
}
