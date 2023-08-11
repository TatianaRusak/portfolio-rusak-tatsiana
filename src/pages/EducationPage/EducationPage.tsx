import React from 'react';
import './EducationPage.scss';
import SertificateGroup from '../../components/Sertificates-group/Sertificates-group';

const Education = () => {
  return (
    <div className="education">
      <h2 className="education__subtitle subtitle">here you can figure out</h2>
      <h1 className="education__title title">my education</h1>
      <div className="education__wrapper">
        <h3 className="education__institution">University</h3>
        <ul className="education__list">
          <li className="education__item">
            Belarusian State Technological University <i>(Publishing, editor technologist)</i>
          </li>
        </ul>

        <h3 className="education__institution">Courses</h3>
        <ul className="education__list">
          <li className="education__item">
            Belarusian National Technical University <i>(Programmer/Web-Designer)</i>
          </li>
          <li className="education__item">Udemy - WEB Developer 2021</li>
          <li className="education__item">RS School «JavaScript/Front-end. Stage 0»</li>
          <li className="education__item">RS School «JavaScript/Front-end. Stage 1-2»</li>
          <li className="education__item">RS School «React. 2022»</li>
        </ul>
      </div>
      <SertificateGroup />
      {/* <div className="sertificates">
        <img
          className="sertificate__img"
          src="./images/sertificates/sert-udemy-1.jpg"
          alt="sertificate"
        />
        <img
          className="sertificate__img"
          src="./images/sertificates/sert-pre.jpg"
          alt="sertificate"
        />
        <img
          className="sertificate__img"
          src="./images/sertificates/sert-stage-1-2.jpg"
          alt="sertificate"
        />
        <img
          className="sertificate__img"
          src="./images/sertificates/sert-stage-3.jpg"
          alt="sertificate"
        />
      </div> */}
    </div>
  );
};

export default Education;
