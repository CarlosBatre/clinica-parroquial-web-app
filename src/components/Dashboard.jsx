import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Calendar } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navegar al login usando React Router
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo y título */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg shadow-md">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C15.31 8 18 10.69 18 14C18 15.66 17.33 17.15 16.24 18.24C15.15 19.33 13.66 20 12 20C10.34 20 8.85 19.33 7.76 18.24C6.67 17.15 6 15.66 6 14C6 10.69 8.69 8 12 8Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Dashboard - Clínica Parroquial
                </h1>
                <p className="text-blue-200 text-sm">
                  Nuestra Señora de La Merced
                </p>
              </div>
            </div>

            {/* Botón de cerrar sesión */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      </main>
    </div>
  );
};

export default Dashboard;