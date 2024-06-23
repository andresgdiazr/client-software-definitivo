import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../Helpers/axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSubmit = () => {

    const Form ={
      'username':email,
      'password':password
    };

    api.post('/auth/login',Form)
    .then((Response) =>{
      const token = Response.data.token;
      localStorage.setItem('token',token);
      console.log(localStorage.getItem('token'));
    })
    .catch((error) => {console.log(error)})
    
    
    // Implementar la lógica de inicio de sesión
    console.log('Iniciando sesión con correo electrónico:', email, 'y contraseña:', password);
    navigate('/cliente');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-5">Hola, bienvenido!</h1>

      
        <form onSubmit={handleSubmit} className="w-full max-w-md">

       
        <div className="mb-4">
          <label className="text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            className="h-12 px-4 w-full border border-gray-300 rounded-lg"
            value={email}
            placeholder="Ingresa tu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-semibold mb-1">Correo electrónico</label>
          <input
            className="h-12 px-4 w-full border border-gray-300 rounded-lg"
            value={password}
            placeholder="Ingresa tu consteseña"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      
      </form>
      </div>

      <div className="flex items-center mt-4">
        <span className="text-sm text-gray-600">¿No tienes una cuenta?</span>
        <button className="ml-2 text-blue-500 text-sm">
          Regístrate
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
