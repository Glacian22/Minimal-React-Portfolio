import React, { useState } from 'react'
import mailer from 'nodemailer'
import './style.css'

export default function Contact (props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  let handleSubmit = event => {
    event.preventDefault()
    console.log(event.target['name'].value)
  }

  return (
    <div id='contact'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>
          Contact
          <input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)} />
          <input type='text' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <textarea id='message' value={message} onChange={(event) => setMessage(event.target.value)} />
          <br />
        </label>
        <input type='submit' value='submit' id='submitbtn' />
      </form>
    </div>
  )
}
