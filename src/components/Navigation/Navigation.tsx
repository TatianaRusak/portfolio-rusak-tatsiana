import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import './Hamburger-react.scss';
import { routes } from '../../utils/routes';
import { nanoid } from 'nanoid';
import { Spin as Hamburger } from 'hamburger-react';

type INavigationProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({ isOpen, setOpen }: INavigationProps) => {
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

  const onToggleBurger = () => {
    setOpen(!isOpen);
    document.querySelector('body')?.classList.toggle('not-scroll');
  };

  const closeBurgerMenu = () => {
    setOpen(false);
    document.querySelector('body')?.classList.remove('not-scroll');
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
      <aside className={isOpen ? 'navigation open' : 'navigation'} onClick={closeBurgerMenu}>
        <div className="overlay"></div>
        <ul className="navigation__list">{myRoutes}</ul>
      </aside>
    </>
  );
};

export default Navigation;
