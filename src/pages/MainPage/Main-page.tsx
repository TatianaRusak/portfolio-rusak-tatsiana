import React from 'react';
import './Main-page.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <aside className="main-page__left">
        <p className="main-page__left_about">
          Fond of complicated <br />
          and interesting tasks <br />
          with an amazing design.
        </p>

        <h1 className="main-page__left_prof">
          frontend <br /> developer
        </h1>
        <h2 className="main-page__left_name name">
          <p className="name__second">Rusak</p>
          <p className="name__first">Tatsiana</p>
        </h2>
      </aside>

      <img src="./images/main-image.jpg" alt="main-image" className="main-page__image" />
    </div>
  );
};

export default MainPage;
