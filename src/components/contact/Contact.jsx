import React, { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri'
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';



function Contact() {

  const initialValues = { name: '', email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czvtypa', 'template_5c9xgze', form.current, 'j6GQaGHA4rLiEARYj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    e.target.reset();
  };
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues)
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }else if(!regex.test(values.email)){
      errors.email = "This is not valid email format";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  }






  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>emanzulfiqarghani@gmail.com</h5>
            <a href="mailto:emanzulfiqarghani@gmail.com?subject=Message-from-React-Portfolio" target="_blank">Send a message</a>
          </article>
          <article className='contact-option'>
            <BsInstagram className='contact-option-icon' />
            <h4>Instagram</h4>
            <h5>_frontend_coding_</h5>
            <a href="https://www.instagram.com/_frontend_coding_/" target="_blank">Send a message</a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            <h5>Eman Zulfiqar Ghani</h5>
            <a href="https://m.me/emanzulfiqarghani" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <input type="text" id="name" name="name" placeholder=" " value={formValues.name} onChange={handleChange} />
            <p>Your Name</p>
          </label>
          <p >{formErrors.name}</p>
          <label>
            <input type="email" id="email" name="email" placeholder=" " value={formValues.email} onChange={handleChange} />
            <p>Your Email</p>
          </label>
          <p >{formErrors.email}</p>
          <textarea id="message" name='message' rows="7" placeholder='Type Here...' value={formValues.message} onChange={handleChange} ></textarea>
          <p >{formErrors.message}</p>
          <button type='submit' className='btn btn-primary'>Send Message</button>

          {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='successful-message'>Your message sent successfully!</div>
        ): (
          <div></div>
        )}
        </form>
      </div>
    </section>
  )
}

export default Contact