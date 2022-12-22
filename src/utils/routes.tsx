import { MainPage } from '../pages/main/Main-page';
import ContactsPage from '../pages/Contacts/ContactsPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <MainPage />,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    element: <PortfolioPage />,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    element: <ContactsPage />,
  },
];
