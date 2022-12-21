import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { routes } from '../../utils/routes';
import { nanoid } from 'nanoid';

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

  return (
    <aside className="navigation">
      <ul className="navigation__list">{myRoutes}</ul>
    </aside>
  );
};

export default Navigation;
