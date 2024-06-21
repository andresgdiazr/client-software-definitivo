
import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import MultiStep from './SignUp/MultiStep';
import LoginScreen from './LogIn/LogIn';
import HomeCliente from './Cliente/Home/HomeCliente';
import Deudas from './Cliente/Listas/Deudas';
import Movimientos from './Cliente/Listas/Movimientos';
import Tiendas from './Cliente/Listas/Tiendas';
import HomeTienda from './Tienda/Home/HomeTienda';

const routes = [
    {
      path: '/',
      children:[
        {
          index:true, element:<Home/>
        },
        {
          path:'signup',
          element:<MultiStep/>
        },
        {
          path:'login',
          element:<LoginScreen/>
        },
        {
          path:'tienda',
          children:[
            {index:true,
              element:<HomeTienda/>,
            }
          ],
        },  
        {
          path:'cliente',
          children:[
            {
              index:true,
              element:<HomeCliente/>
            },
            {
              path:'deudas',
              element:<Deudas/>
            },
            {
              path:'movimientos',
              element:<Movimientos/>
            },
            {
              path:'tiendas',
              element:<Tiendas />
            }
          ]
        }
      ]
    },
  ];


const router = createBrowserRouter(routes);

export default router;


