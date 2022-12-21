import Contacts from '../components/Contacts/Contacts';
import Portfolio from '../components/Portfolio/Portfolio';
import { MainPage } from '../pages/main/Main-page';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <MainPage />,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    element: <Contacts />,
  },
];
