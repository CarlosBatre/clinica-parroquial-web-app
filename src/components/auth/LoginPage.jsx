import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Navegar al dashboard usando React Router
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Tarjeta principal */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          {/* Header con logo e icono dental */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C15.31 8 18 10.69 18 14C18 15.66 17.33 17.15 16.24 18.24C15.15 19.33 13.66 20 12 20C10.34 20 8.85 19.33 7.76 18.24C6.67 17.15 6 15.66 6 14C6 10.69 8.69 8 12 8Z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Clínica Dental Parroquial</h1>
            <h2 className="text-xl text-blue-200 mb-1">Nuestra Señora de La Merced</h2>
            <p className="text-blue-300 text-sm">Sistema de Gestión Dental</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white text-center mb-6">Iniciar Sesión</h3>
            
            {/* Campo Usuario */}
            <div className="space-y-2">
              <div className="text-blue-200 text-sm font-medium">Usuario</div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Ingrese su usuario"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <div className="text-blue-200 text-sm font-medium">Contraseña</div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Ingrese su contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botón de acceso */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Acceder
            </button>

            {/* Enlaces adicionales */}
            <div className="space-y-3 text-center">
              <a 
                href="#" 
                className="block text-blue-300 hover:text-white text-sm transition-colors duration-200 hover:underline"
              >
                ¿Olvidé mi contraseña?
              </a>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-300 text-sm">¿No tienes una cuenta?</span>
                <a 
                  href="#" 
                  className="text-blue-200 hover:text-white text-sm font-semibold transition-colors duration-200 hover:underline"
                >
                  Regístrate
                </a>
              </div>
            </div>
          </div>

          {/* Footer con información adicional */}
          <div className="mt-8 pt-6 border-t border-blue-300/20 text-center">
            <p className="text-blue-300 text-xs">
              © 2025 Clínica Dental Parroquial - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;