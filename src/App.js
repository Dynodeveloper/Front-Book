import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './components/profile/profilePage'
import LoginPage from './components/Login/LoginPage';
import RegistrationForm from './components/registration/RegistrationForm';
import Dashboard from './components/Dashboard/Dashboard';
import ReviewForm from './components/Reviews/ReviewPage';
import MoreInfo from './components/More/MoreInfo';
import ResetPasswordForm from './components/ResetPassword/Reset';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/more" element={<MoreInfo />} />
        <Route path="/Reset" element={<ResetPasswordForm />} />
      </Routes>
    </Router>
  );
}


export default App;
