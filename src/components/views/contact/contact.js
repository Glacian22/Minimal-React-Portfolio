import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './style.css'

export default function Contact (props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  let handleSubmit = event => {
    event.preventDefault()
    let mailKey = process.env.REACT_APP_EMAILJS_KEY
    console.log(event.target['name'].value)
    // console.log(mailKey)
    console.log(`process: ${process.env}`)
    emailjs.sendForm('portfolio', 'contact_form', event.target, mailKey)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(`error: ${error.text}`)
      })
  }

  return (
    <div id='contact'>
      contact area
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>
          Contact
          <input type='text' name='name' id='name' value={name} onChange={(event) => setName(event.target.value)} />
          <input type='text' name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <br />
          <textarea name='text' id='message' value={message} onChange={(event) => setMessage(event.target.value)} />
          <br />
        </label>
        <input type='submit' value='submit' id='submitbtn' />
      </form>
    </div>
  )
}
