import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Contacts from './pages/ContactsPage/ContactsPage';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './pages/PortfolioPage/PortfolioPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import MainPage from './pages/Main/Main-page';
import Education from './pages/EducationPage/EducationPage';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/education" element={<Education />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
