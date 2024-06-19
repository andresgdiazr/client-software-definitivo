import React from 'react';
import imagen from '../assets/imagen.jpg';
import { Link, Navigate } from 'react-router-dom';
import Button from '../../Components/atoms/Button';
const Home = () => {

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <img
        src={imagen}
        alt="Descripción de la imagen"
        className="w-72 h-72 mb-12"
      />
      <h1 className="text-2xl font-bold text-center mb-8 text-black">
        Facilitando tus pagos, <br /> Asegurando tu éxito
      </h1>
      
      <Link to="/login" className='mt-6 w-72 h-72 '>
        <Button>Iniciar sesión</Button>
      </Link>

      <Link to="/SignUp" className='mt-6 w-72 h-72'>
        <Button>Registrarse</Button>
      </Link>
        
    </div>
  );
};

export default Home;
