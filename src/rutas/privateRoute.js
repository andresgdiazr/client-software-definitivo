import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirigir a la página de inicio de sesión si no hay token
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
};

export default PrivateRoute;