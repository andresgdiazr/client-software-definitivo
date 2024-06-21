import React from "react";
import FlechaDerecha from "../../../Components/atoms/Icons/FlechaDerecha";
import RollBack from "../../../Components/organism/RollBack";
import BuscadorSection from "../../../Components/organism/BuscadorSection";
import Table from "../../../Components/organism/Table";

const Deudas = () => {

    const head = ['#','First','Last','Handle'];

    return(

    <div className="flex justify-center lg:w-screen lg:h-screen lg:bg-[#E4E7ED]">
      <div className="sm:w-full h-auto flex flex-col p-4 lg:rounded-md lg:mb-10
        lg:w-1/2  bg-white lg:mt-5 lg:shadow-lg
        ">
         
         <RollBack title={'Deudas'} />
        
        <BuscadorSection />
        
        <Table />
        
      </div>
    </div>

    )
}

export default Deudas;