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
    emailjs.sendForm('portfolio', 'contact_form', event.target, mailKey)
      .then((result) => {
        console.log(result.text)
        setName('')
        setEmail('')
        setMessage('')
        window.alert('Your message is on its way, thanks!')
      }, (error) => {
        console.log(`error: ${error.text}`)
      })
  }

  return (
    <div className='content' id='contact'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <label for='name'>{'Name: '}</label>
        <input type='text' name='name' id='name' value={name} onChange={(event) => setName(event.target.value)} />
        <label for='email'>{'Email: '}</label>
        <input type='text' name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <label for='message'>{'Message: '}</label>
        <textarea name='text' id='message' value={message} onChange={(event) => setMessage(event.target.value)} />
        <input type='submit' value='submit' id='submitbtn' />
      </form>
    </div>
  )
}
