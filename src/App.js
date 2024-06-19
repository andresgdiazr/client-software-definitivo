
import { RouterProvider } from 'react-router-dom';
import router from './rutas';
import './index.css'
import HomeCliente from './rutas/Cliente/Home/HomeCliente';
import Movimientos from './rutas/Cliente/Movimientos/Movimientos';
import Home from './rutas/fintech/home';

function App() {

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
