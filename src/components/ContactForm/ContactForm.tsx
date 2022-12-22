import React, { FormEvent, useRef } from 'react';
import './ContactForm.scss';
import emailjs from '@emailjs/browser';

type errorType = { text: string; status: number };
type resultType = { text: string; status: number };

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail_service_ID', 'template_oy45w24', form.current!, '3vvZoGrTqwqI6tI67')
      .then(
        (result: resultType) => {
          console.log('result.text', result);
        },
        (error: errorType) => {
          console.log('error.message', error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contacts__form">
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
