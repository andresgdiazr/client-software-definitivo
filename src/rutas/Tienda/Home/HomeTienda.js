import React from "react";
import CardButtonTienda from "../../../Components/atoms/CardButtonTienda";

const HomeTienda = () =>{
    return(
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


            </div>

            <div className='w-full xl:w-10/12 sm:w-full'>
            
            <div className='w-full mt-5'>
                <h2 className='text-xl font-semibold'>Operaciones</h2> 
            </div> 

            <div className='w-full flex flex-col lg:flex-row  gap-y-5 lg:gap-x-5 mt-5'>

            <CardButtonTienda colorprimario={"bg-fullblue"} colorsecundario={"bg-lightblue"}>
                <p className="text-lg text-white font-semibold">Realizar venta</p>
            </CardButtonTienda>
            <CardButtonTienda colorprimario={"bg-fullyellow"} colorsecundario={"bg-lightyellow"}>
            <p className="text-lg text-black font-semibold">Realizar Compra</p>
            </CardButtonTienda>
           
            </div>
           
            </div>
        </div>
    )
}

export default HomeTienda;