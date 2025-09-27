import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta por defecto redirige al login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Ruta del login */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Ruta del dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Ruta para páginas no encontradas - redirige al login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;