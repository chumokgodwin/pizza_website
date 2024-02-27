import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}>

      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id="contact-form" method='post'>
          <label htmlFor='name'>Fullname: </label>
          <input name='name' placeholder='Enter full name....' type='text'/>
          <label htmlFor='email'>Email: </label>
          <input name='email' placeholder='Enter your email....' type='email'/>
          <label htmlFor='phone'>Phone Number: </label>
          <input name='phone' placeholder='Enter Mobile number....' type='number' maxLength='11' />
          <label htmlFor='message'>Message: </label>
          <textarea rows="6" placeholder='Enter message....' name='message'></textarea>
          <button type='submit'>Send Message</button>
          
        </form>

      </div>

    </div>
  )
}

export default Contact