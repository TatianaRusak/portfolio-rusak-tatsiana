import MainPage from '../pages/MainPage/Main-page';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import SkillsPage from '../pages/SkillsPage/SkillsPage';
import EducationPage from '../pages/EducationPage/EducationPage';

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
    path: '/skills',
    name: 'Skills',
    element: <SkillsPage />,
  },
  {
    path: '/education',
    name: 'Education',
    element: <EducationPage />,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    element: <ContactsPage />,
  },
];
