import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VisitsPage from './pages/VisitsPage';
import StudentsPage from './pages/StudentsPage';
import OrganizersPage from './pages/OrganizersPage';
import ReportsPage from './pages/ReportsPage';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visits" element={<VisitsPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/organizers" element={<OrganizersPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
