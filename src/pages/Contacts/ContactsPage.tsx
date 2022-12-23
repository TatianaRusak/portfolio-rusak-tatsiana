import React from 'react';
import { ToastContainer } from 'react-toast';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contacts from '../../components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <div className="contacts">
      <ContactForm />
      <Contacts />
      <ToastContainer delay={5000} position="top-center" />
    </div>
  );
};

export default ContactsPage;
