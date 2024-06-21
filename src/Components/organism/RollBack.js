import React from "react";
import FlechaDerecha from "../atoms/Icons/FlechaDerecha";
const RollBack = ({title}) => {
    return(
        <div className="flex items-center mb-10"> 
          <div>
          <FlechaDerecha />
          </div>
          <h1>{title}</h1>

        </div>
    )
}

export default RollBack;