import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/register' />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App
