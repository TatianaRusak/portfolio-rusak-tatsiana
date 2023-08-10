import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import './Hamburger-react.scss';
import { routes } from '../../utils/routes';
import { nanoid } from 'nanoid';
import { Spin as Hamburger } from 'hamburger-react';

const Navigation = () => {
  const myRoutes = routes.map((route) => {
    return (
      <li key={nanoid()}>
        <NavLink
          end
          className={({ isActive }) => 'navigation__item' + (isActive ? ' active' : '')}
          to={route.path}
        >
          {route.name}
        </NavLink>
      </li>
    );
  });
  const [isOpen, setOpen] = useState(false);

  const onToggleBurger = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={onToggleBurger}
        color="#ffffff"
        rounded
        duration={0.7}
      />
      <aside className={isOpen ? 'navigation open' : 'navigation'}>
        <ul className="navigation__list">{myRoutes}</ul>
      </aside>
    </>
  );
};

export default Navigation;
