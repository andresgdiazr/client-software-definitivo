import React, { useState } from 'react';
import InputSection from '../../../Components/organism/InputSection';
import Button from '../../../Components/atoms/Button';

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


      <InputSection 
        tag="nombre"
        name="nombre"
        value={form.nombre}
        handleInput={handleInput}
        type="text"
      />

      <InputSection
        tag="apellido"
        name="apellido"
        value={form.apellido}
        handleInput={handleInput}
        type="text"
      />

      <InputSection
        tag="cedula"
        name="cedula"
        value={form.cedula}
        handleInput={handleInput}
        type="text"
       />

      <Button>Continuar</Button>    
          
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
