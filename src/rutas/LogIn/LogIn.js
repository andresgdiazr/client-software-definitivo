import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con correo electrónico:', email, 'y contraseña:', password);
    navigate('/cliente')
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-5">Hola, bienvenido!</h1>

        <div className="mb-4">
          <label className="text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            className="h-12 px-4 w-full border border-gray-300 rounded-lg"
            value={email}
            placeholder="Ingresa tu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            autoCapitalize="none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            className="h-12 px-4 w-full border border-gray-300 rounded-lg"
            value={email}
            placeholder="Ingresa tu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="email"
            autoCapitalize="none"
          />
        </div>

        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <span className="text-sm text-gray-600">¿No tienes una cuenta?</span>
        <button className="ml-2 text-blue-500 text-sm" onClick={() => navigate('/signup')}>
          Regístrate
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
