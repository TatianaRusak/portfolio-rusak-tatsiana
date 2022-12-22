import React from 'react';
import './Contacts.scss';

const Contacts = () => (
  <ul className="contacts__list">
    <li className="contacts__item">
      <span>Location:</span> Minsk, Belarus
    </li>
    <li className="contacts__item">
      <span>Phone:</span>
      <a className="contacts__link" href="tel:+375295661390">
        {' '}
        +375 29 566 13 90
      </a>
    </li>
    <li className="contacts__item">
      <span>E-mail:</span>{' '}
      <a className="contacts__link" href="mailto:tatianarusak85@gmail.com">
        tatianarusak85@gmail.com
      </a>
    </li>
    <li className="contacts__item">
      <span>GitHub:</span>{' '}
      <a className="contacts__link" href="https://github.com/TatianaRusak">
        TatianaRusak
      </a>{' '}
    </li>
    <li className="contacts__item">
      <span>Discord:</span>
      <a className="contacts__link" href="https://discordapp.com/users/913398453462265859/">
        {' '}
        Tatiana (@TatianaRusak)
      </a>
    </li>
    <li className="contacts__item">
      <span>LinkedIn:</span>
      <a className="contacts__link" href="https://www.linkedin.com/in/tatsiana-rusak/">
        {' '}
        Tatsiana Rusak
      </a>
    </li>
    <li className="contacts__item">
      <span>Telegram:</span>
      <a href="tg://resolve?domain=TatianaRusak"> TatianaRusak</a>
    </li>
  </ul>
);

export default Contacts;
