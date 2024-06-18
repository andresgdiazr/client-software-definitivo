
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import MultiStep from './SignUp/MultiStep';
import LoginScreen from './LogIn/LogIn';
import HomeCliente from './Cliente/Home/HomeCliente';

const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signup',
      element: <MultiStep />,
    },
    {
        path:'/login',
        element: <LoginScreen />
    },
    {
        path:'/cliente',
        element:<HomeCliente />
    }
  ];


const router = createBrowserRouter(routes);

export default router;


