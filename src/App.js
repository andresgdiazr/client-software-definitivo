
import { RouterProvider } from 'react-router-dom';
import router from './rutas';
import './index.css'
import HomeCliente from './rutas/Cliente/Home/HomeCliente';
import Movimientos from './rutas/Cliente/Movimientos/Movimientos';
import Home from './rutas/fintech/home';
import Login from './rutas/fintech/login';
import ListCustomers from './rutas/fintech/listCustomers';
import AddStore from './rutas/fintech/addStore';

function App() {

  return (
    <div>
      <ListCustomers />
    </div>
  );
}

export default App;
