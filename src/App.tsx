import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Contacts from './pages/Contacts/ContactsPage';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './pages/PortfolioPage/PortfolioPage';
import { MainPage } from './pages/main/Main-page';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
