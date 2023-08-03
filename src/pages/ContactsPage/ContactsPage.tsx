import React from 'react';
import { ToastContainer } from 'react-toast';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contacts from '../../components/Contacts/Contacts';
import './ContactsPage.scss';

const ContactsPage = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__subtitle subtitle">if you have any suggestions</h2>
      <h1 className="contacts__title title">send me an email</h1>
      <ContactForm />
      <Contacts />
      <ToastContainer delay={5000} position="top-center" />
    </div>
  );
};

export default ContactsPage;
