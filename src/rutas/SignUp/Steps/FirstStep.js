import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FirstStep = ({ nextStep, handleInput, form }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Registrarse en el servidor o realizar otra acción
    nextStep();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <h1 className="text-2xl font-bold text-center mb-12">Registro de usuario</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="email" className="block text-base font-semibold mb-2 opacity-80">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.correo}
            onChange={(e) => handleInput({ name: 'correo', value: e.target.value })}
            required
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-base font-semibold mb-2 opacity-80">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => handleInput({ name: 'contraseña', value: e.target.value })}
            required
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
          />
        </div>
        
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Continuar</button>
      </form>

      <div className="mt-6 flex items-center justify-center">
        <p className="text-base text-gray-400">¿Ya tienes una cuenta?</p>
        <a className="text-blue-500 ml-2" onClick={() => navigate('/login')}>Iniciar sesión</a>
      </div>

    </div>
  );
};

export default FirstStep;