import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
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
    // Simulando redirección al dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-blue-200/20 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-slate-100/40 to-blue-100/30 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-lg">
        {/* Tarjeta principal */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-10">
          {/* Header con logo e información */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6 shadow-xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C15.31 8 18 10.69 18 14C18 15.66 17.33 17.15 16.24 18.24C15.15 19.33 13.66 20 12 20C10.34 20 8.85 19.33 7.76 18.24C6.67 17.15 6 15.66 6 14C6 10.69 8.69 8 12 8Z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Clínica Dental Parroquial</h1>
            <h2 className="text-lg text-blue-700 font-medium mb-2">Nuestra Señora de La Merced</h2>
            <p className="text-slate-600 text-sm">Sistema de Gestión Dental</p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Iniciar Sesión</h3>
              <p className="text-slate-500 text-sm">Accede a tu cuenta para continuar</p>
            </div>
            
            {/* Campo Usuario */}
            <div className="space-y-3">
              <label className="block text-slate-700 text-sm font-medium">Usuario</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-slate-50"
                  placeholder="Ingrese su usuario"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-3">
              <label className="block text-slate-700 text-sm font-medium">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-14 py-4 bg-slate-50/80 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-slate-50"
                  placeholder="Ingrese su contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botón de acceso */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
            >
              Acceder al Sistema
            </button>

            {/* Separador */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Opciones adicionales</span>
              </div>
            </div>

            {/* Enlaces adicionales */}
            <div className="space-y-4 text-center">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span className="text-slate-500">¿No tienes una cuenta?</span>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
                >
                  Solicitar acceso
                </a>
              </div>
            </div>
          </div>

          {/* Footer con información adicional */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="text-center space-y-2">
              <p className="text-slate-500 text-xs">
                © 2025 Clínica Dental Parroquial Nuestra Señora de La Merced
              </p>
              <p className="text-slate-400 text-xs">
                Todos los derechos reservados • Versión 1.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;