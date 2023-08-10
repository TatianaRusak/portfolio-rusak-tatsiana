import React from 'react';
import './Main-page.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <aside className="main-page__left">
        <p className="main-page__left_about">
          Fond&nbsp;of&nbsp;complicated and&nbsp;interesting&nbsp;tasks
          with&nbsp;an&nbsp;amazing&nbsp;design.
        </p>

        <h1 className="main-page__left_prof">frontend developer</h1>
        <h2 className="main-page__left_name name">
          <p className="name__second">Rusak</p>
          <p className="name__first">Tatsiana</p>
        </h2>
      </aside>

      <div className="main-page__image-wrapper">
        <img src="./images/main-image.jpg" alt="main-image" className="main-page__image" />
      </div>
    </div>
  );
};

export default MainPage;
