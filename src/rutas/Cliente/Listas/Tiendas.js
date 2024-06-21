import React, { useEffect, useState } from "react";
import FlechaDerecha from "../../../Components/atoms/Icons/FlechaDerecha";
import RollBack from "../../../Components/organism/RollBack";
import BuscadorSection from "../../../Components/organism/BuscadorSection";
import Table from "../../../Components/organism/Table";

const Tiendas = () => {

    const head = ['#','First','Last','Handle'];

    const [Buscar,SetBuscar]=useState('');
    const [info,SetInfo]=useState('');

    

    useEffect(() =>{
        head.map((e)=>{
            console.log(e);
        })
    },[]);

    return(

    <div className="flex justify-center lg:w-screen lg:h-screen lg:bg-[#E4E7ED]">
      <div className="sm:w-full h-auto flex flex-col p-4 lg:rounded-md lg:mb-10
        lg:w-1/2  bg-white lg:mt-5 lg:shadow-lg
        ">
         
         <RollBack title={'Tiendas'} />
        
        <BuscadorSection />
        
        <Table />
        
      </div>
    </div>

    )
}

export default Tiendas;