import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contacts from '../../components/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <div className="contacts">
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default ContactsPage;
