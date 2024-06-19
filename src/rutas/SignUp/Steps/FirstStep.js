import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputSection from '../../../Components/organism/InputSection';
import Button from '../../../Components/atoms/Button';

const FirstStep = ({ nextStep, handleInput, form }) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Registrarse en el servidor o realizar otra acción
    nextStep();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <h1 className="text-2xl font-bold text-center mb-12">Registro de usuario</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        
        <InputSection
          tag="email"
          name="correo"
          value={form.correo}
          handleInput={handleInput}
          type="email"
        />

        <InputSection
          tag="password"
          name="contraseña"
          value={form.password}
          handleInput={handleInput}
          type="password"
        />

        <Button>Continuar</Button>
        
      </form>

      <div className="mt-6 flex items-center justify-center">
        <p className="text-base text-gray-400">¿Ya tienes una cuenta?</p>
        <a className="text-blue-500 ml-2" onClick={() => navigate('/login')}>Iniciar sesión</a>
      </div>

    </div>
  );
};

export default FirstStep;