import React from "react";
import FlechaDerecha from "../atoms/Icons/FlechaDerecha";
import { useNavigate } from "react-router-dom";

const RollBack = ({title}) => {

  const navigate = useNavigate();

    return(
        <div className="flex items-center mb-10 sm:w-full h-auto lg:bg-white pt-2 pb-2
          rounded-md
        bg-[#E8EAF2]"> 
          <button onClick={() => {navigate('../')   }}>
            <FlechaDerecha />
          </button>
         
          
          <h1 className="text-xl font-medium">{title}</h1>

        </div>
    )
}

export default RollBack;