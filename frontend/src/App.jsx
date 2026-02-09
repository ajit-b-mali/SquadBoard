// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Gaurds
import PrivateRoute from './components/PrivateRoute';

// Pages
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        
        {/* Private Routes */}
        <Route path='/dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        
        {/* Catch-all Route */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}
