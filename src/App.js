import { RouterProvider } from 'react-router-dom';
import router from './rutas';
import './index.css'
import Home from './rutas/fintech/home';
import Login from './rutas/fintech/login';
import ListCustomers from './rutas/fintech/listCustomers';
import AddStore from './rutas/fintech/addStore';
import EditCustomer from './rutas/fintech/editCustomer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCliente from './rutas/Cliente/Home/HomeCliente';
import MultiStep from './rutas/SignUp/MultiStep';
import HomeTienda from './rutas/Tienda/Home/HomeTienda';
import PrivateRoute from './rutas/privateRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/tienda" element={<PrivateRoute/>}>
          <Route path="" element={<HomeTienda/>} />
          {/* TODO poner las demas rutas de tienda */}
        </Route>

        <Route path="/cliente" element={<PrivateRoute/>}>
          <Route path="" element={<HomeCliente/>} />
          {/* TODO poner las demas rutas de cliente */}
        </Route>

        <Route path="/fintech" element={<PrivateRoute/>}>
          <Route path="" element={<Home/>} />
          <Route path="listar-clientes" element={<ListCustomers/>} />
          <Route path="agregar-tienda" element={<AddStore/>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
