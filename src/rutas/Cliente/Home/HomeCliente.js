import React, { useEffect, useState } from 'react';
import CardButton from '../../../Components/atoms/CardButton';
import Lista from '../../../Components/organism/Lista';
import { Link } from 'react-router-dom';
import axios from 'axios';
const HomeCliente = () => {

  const [state,setState] = useState({
    items:''
  });

  function getData () {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      console.log(response.data.results);
    })
    .catch(err => console.log(err))

    
  }


  useEffect(()=>{
    getData();
    console.log(state);
  },[])

  return (

    <div className='w-full flex items-center max-w-screen flex-col justify-center bg-white p-4'>
      
      <div className='w-full h-full rounded-md bg-[#3CAE8B] shadow-lg' >

        <div className='w-full h-24 flex justify-between p-6'>
            <div className='w-1/2 flex items-center'>
              <p className='text-xl font-semibold text-white'>Bievenido, Lorem Ipsum</p>
            </div>
            <div className='w-1/2 flex items-center justify-end'>
              <div className='w-10 h-10 rounded-full bg-white shadow-md'>
                  
              </div>
            </div>
            
        </div>

        <div className='w-full flex justify-between'>
            <div className='w-1/2 h-20 flex flex-col align-center ml-5'>
                <p className='text-white text-md font-normal'>Monto Disponible</p>
                <p className='text-white text-xl font-semibold'>$500</p>
            </div>

            <div className='w-1/2 h-20 flex flex-col align-start '>
            
            <p className='text-white text-md font-normal'>Estatus</p>
            <div className='p-1 w-32 bg-[#D8E8F5] rounded-md shadow-md'>
            <p className='text-lg font-semibold'>Solvente</p>
            </div>   
                

            </div>
        </div>

        
        
      </div>
      
      <div className='w-full xl:w-10/12 sm:w-full'>

      
      <div className='w-full mt-2.5'>
      <h2 className='text-xl font-semibold'>Operaciones</h2> 
      </div> 

      <div className='w-full flex gap-x-3 mt-5'>

          <CardButton colorprimario="bg-fullred" colorsecundario="bg-lightred" dir="Deudas" tipo='Deudas'>
            
            <p className='mt-1 text-blue-100'>Deudas</p>
          </CardButton>

          <CardButton colorprimario="bg-fullblue" colorsecundario="bg-lightblue" dir="Movimientos" tipo='Movimientos'>
            <p className='mt-1 text-white'
            >Movimientos</p>
          </CardButton>
          
          <CardButton colorprimario="bg-fullyellow" colorsecundario="bg-lightyellow" dir="Tiendas" tipo='Tiendas'>
            <p className='mt-1'>Tiendas</p>
          </CardButton>
        
      </div>

      <div className='w-full flex justify-between mt-5'>
            <h2 className='text-xl font-semibold'>Deudas</h2>  
            <Link to="deudas">
              <h3 className='text-md font-extralight'>Ver más</h3>
            </Link>
      </div> 

      <Lista />
      
      </div>


      

    </div>
 
    
 
  );
};

export default HomeCliente;
