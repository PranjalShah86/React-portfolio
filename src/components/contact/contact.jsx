import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
const form=useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_p1pcwkv', 'template_6p2eyzi', form.current, '0F0Ulaur0Msid5act')
   e.target.reset()
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>pranjalshah302@gmail.com</h5>
              <a href='mailto:pranjalshah302@gmail.com' target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Pranjal Shah</h5>
              <a href='https://m.me/pranjal.shah.18294' target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+917405833632</h5>
              <a href='https://api.whatsapp.com/send?phone=+917405833632' target="_blank">Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact