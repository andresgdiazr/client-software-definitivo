import React from 'react';

const HomeCliente = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10 px-4">
      <div className="bg-green-500 rounded-lg p-4 mb-4 shadow-md w-full md:w-3/4 lg:w-2/3">
        <h1 className="text-white text-lg font-bold mb-2">Bienvenido, Lorem</h1>
        <div className="flex flex-wrap justify-between">
          <p className="text-white text-base md:text-lg mb-2 md:mb-0">$50,00</p>
          <p className="text-white text-base md:text-lg">Endeudado</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full mb-4">
        <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full md:w-auto">
          Deudas
        </button>
        <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full md:w-auto">
          Movimientos
        </button>
        <button className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full md:w-auto">
          Tiendas
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 w-full">
        <h2 className="text-base md:text-lg font-bold mb-3">Cuentas por pagar</h2>
        <a href="#" className="text-blue-500 mb-4 block">Ver más</a>
        {Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex justify-between mb-2">
              <p className="text-sm md:text-base">Ciro Sánchez</p>
              <p className="text-sm md:text-base font-bold">$100,00</p>
              <p className="text-xs md:text-sm text-gray-500">25, Diciembre</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCliente;
