
import { RouterProvider } from 'react-router-dom';
import router from './rutas';
import './index.css'
import HomeCliente from './rutas/Cliente/Home/HomeCliente';
import Movimientos from './rutas/Cliente/Movimientos/Movimientos';

function App() {

  return (
    <div>
      <Movimientos />
    </div>
  );
}

export default App;
