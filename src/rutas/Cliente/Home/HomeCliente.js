import React from 'react';
import CardButton from '../../../Components/atoms/CardButton';

const HomeCliente = () => {
  return (

    <div className='w-full flex items-center max-w-screen flex-col justify-center bg-white p-4'>
      
      <div className='w-full h-full rounded-md bg-[#3CAE8B] shadow-lg' >

        <div className='w-full h-24 flex justify-between p-6'>
            <div className='w-1/2 flex items-center'>
              <p>Bievenido, Lorem Ipsum</p>
            </div>
            <div className='w-1/2 flex items-center justify-end'>
              <div className='w-10 h-10 rounded-full bg-white shadow-md'>
                  
              </div>
            </div>
            
        </div>

        <div className='w-full flex justify-between'>
            <div className='w-1/2 h-20 flex flex-col align-center p-6'>
                <p>Monto Disponible</p>
                <p>$$500</p>
            </div>

            <div className='w-1/2 h-20 '>
            
            

            </div>
        </div>

        
        
      </div>
      
      <div className='w-full mt-2.5'>
            <h2>Operaciones</h2>  
      </div> 

      <div className='w-full flex gap-x-3 mt-5'>

          <CardButton colorprimario="#C5313D" colorsecundario="#FF4051">
            Deudas
          </CardButton>

          <CardButton colorprimario="#121660" colorsecundario="#7173A0">
            Movimientos
          </CardButton>
          
          <CardButton colorprimario="#FFD140" colorsecundario="#FFE79D">
            Deudas
          </CardButton>
        
      </div>

      <div className='w-full flex justify-between mt-5'>
            <h2>Operaciones</h2>  
            <h3>Ver más</h3>
      </div> 

      <div className='w-full flex flex-col gap-2 mt-5'>

          <div className='w-full h-10 bg-slate-500'>

          </div>

          <div className='w-full h-10 bg-slate-500'>

          </div>

          <div className='w-full h-10 bg-slate-500'>

          </div>

          <div className='w-full h-10 bg-slate-500'>

          </div>

          <div className='w-full h-10 bg-slate-500'>

          </div>

      </div>




      

    </div>
 
    
 
  );
};

export default HomeCliente;
