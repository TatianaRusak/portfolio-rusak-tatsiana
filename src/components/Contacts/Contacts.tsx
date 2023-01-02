import React from 'react';
import './Contacts.scss';

const Contacts = () => (
  <ul className="contacts__list">
    <li className="contacts__item">
      <span>Location:</span> Minsk, Belarus
    </li>
    <li className="contacts__item">
      <a className="contacts__link" href="tel:+375295661390">
        <span>Phone:</span> +375 29 566 13 90
      </a>
    </li>
    <li className="contacts__item">
      <a className="contacts__link" href="mailto:tatianarusak85@gmail.com">
        <span>E-mail:</span> tatianarusak85@gmail.com
      </a>
    </li>
    <li className="contacts__item">
      <a className="contacts__link" href="https://github.com/TatianaRusak">
        <span>GitHub:</span> TatianaRusak
      </a>{' '}
    </li>
    <li className="contacts__item">
      <a className="contacts__link" href="https://discordapp.com/users/913398453462265859/">
        <span>Discord:</span> Tatiana (@TatianaRusak)
      </a>
    </li>
    <li className="contacts__item">
      <a className="contacts__link" href="https://www.linkedin.com/in/tatsiana-rusak/">
        <span>LinkedIn:</span> Tatsiana Rusak
      </a>
    </li>
    <li className="contacts__item">
      <a href="tg://resolve?domain=TatianaRusak">
        <span>Telegram:</span> TatianaRusak
      </a>
    </li>
  </ul>
);

export default Contacts;
