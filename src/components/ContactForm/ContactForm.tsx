import React, { useRef } from 'react';
import './ContactForm.scss';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toast';

type ErrorType = { text: string; status: number };
type ResultType = { text: string; status: number };
type FormValues = {
  from_name: string;
  from_email: string;
  from_message: string;
};

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });

  const success = () =>
    toast('Your message has been delivered to Tatsiana.', {
      backgroundColor: '#C7A17A',
      color: '#ffffff',
    });

  const sendEmail = () => {
    emailjs
      .sendForm('gmail_service_ID', 'template_oy45w24', form.current!, '3vvZoGrTqwqI6tI67')
      .then(
        (result: ResultType) => {
          console.log('result.text', result);
          success();
        },
        (error: ErrorType) => {
          console.log('error.message', error.text);
          toast.error(
            'Unfortunately, there is an error on the server. Please, use another contact type from the list below.'
          );
        }
      );
    reset();
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contacts__form form">
      <label className="form__label" htmlFor="from_name">
        Name
      </label>
      <input
        id="from_name"
        type="text"
        className="form__input"
        {...register('from_name', {
          required: true,
          maxLength: {
            value: 20,
            message: 'Enter no more than 20 characters',
          },
          minLength: {
            value: 2,
            message: 'Enter at least 2 characters.',
          },
          pattern: /^[а-яА-ЯёЁa-zA-Z\s]+$/i,
        })}
      />
      <div className="form__error">
        <p>{errors.from_name && (errors.from_name?.message || 'Enter the correct data.')}</p>
      </div>

      <label htmlFor="from_email" className="form__label">
        Email
      </label>
      <input
        id="from_email"
        type="email"
        className="form__input"
        {...register('from_email', {
          required: true,
          pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
        })}
      />
      <div className="form__error">
        <p>{errors.from_email && (errors.from_email?.message || 'Enter your correct email.')}</p>
      </div>

      <label htmlFor="from_email" className="form__label">
        Message
      </label>
      <textarea
        id="from_message"
        className="form__textarea"
        {...register('from_message', {
          required: true,
        })}
      />
      <div className="form__error">
        <p>
          {errors.from_message &&
            (errors.from_message?.message || 'Enter your message in the field.')}
        </p>
      </div>
      <div className="form__submit-btn_wrapper">
        <button type="submit" value="Send" className="form__submit-btn">
          submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
