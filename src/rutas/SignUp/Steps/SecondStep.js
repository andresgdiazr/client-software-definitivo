import React, { useState } from 'react';

const SecondStep = ({ nextStep, handleInput, form }) => {
 

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Registrarse en el servidor o realizar otra acción
    nextStep();

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
    

      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-12">Información personal</h1>

        


      <form onSubmit={handleSubmit} className="w-full max-w-md">

      <div className="mb-6">
          <label htmlFor="nombre" className="block text-base font-semibold mb-2 opacity-80">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={(e) => handleInput({ name: 'nombre', value: e.target.value })}
            placeholder="Ingresa tu nombre"
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
            required
          />

        </div>

        <div className="mb-6">
          <label htmlFor="apellido" className="block text-base font-semibold mb-2 opacity-80">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={form.apellido}
            onChange={(e) => handleInput({ name: 'apellido', value: e.target.value })}
            placeholder="Ingresa tu apellido"
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="cedula" className="block text-base font-semibold mb-2 opacity-80">Cédula</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={form.cedula}
            onChange={(e) => handleInput({ name: 'cedula', value: e.target.value })}
            placeholder="Ingresa tu cédula"
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
            required
          />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">Continuar</button>        

        </form>
      </div>
      
      <div className="mt-6 flex justify-center items-center">
        <p className="text-gray-600">¿Ya tienes una cuenta?</p>
        <button className="ml-2 text-blue-500">Inicia sesión</button>
      </div>
    </div>
  );
};

export default SecondStep;
