import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThirdStep = ({ nextStep, handleInput, form }) => {
  
  
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    
  navigate('/');    
      
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-12">Información personal</h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">

        <div className="mb-6">
          <label htmlFor="numero" className="block text-base font-semibold mb-2 opacity-80">Número de teléfono</label>
          <div className="flex items-center">
            <input
              type="text"
              className="w-1/4 h-10 px-2 border border-gray-300 rounded opacity-80 text-center mr-2"
              placeholder="+58"
              readOnly
            />
            <input
              type="text"
              id="numero"
              name="numero"
              value={form.numero}
              onChange={(e) => handleInput({ name: 'numero', value: e.target.value })}
              className="w-3/4 h-10 px-2 border border-gray-300 rounded opacity-80"
              placeholder="Ingresa tu número"
            />
          </div>
         
         </div>

        <div className="mb-6">
          <label htmlFor="direccion" className="block text-base font-semibold mb-2 opacity-80">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={form.direccion}
            onChange={(e) => handleInput({ name: 'direccion', value: e.target.value })}
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
            placeholder="Ingresa tu dirección"
          />
        
        </div>

        <button
          type="button"
          className="bg-green-500 text-white font-bold py-2 rounded w-full mt-6"
          onClick={handleSubmit}
        >
          CONTINUAR
        </button>
        </form>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <p className="text-gray-600">¿Ya tienes una cuenta?</p>
        <button className="ml-2 text-blue-500">Inicia sesión</button>
      </div>
    </div>
  );
};

export default ThirdStep;
