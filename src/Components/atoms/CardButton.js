import React from "react";
import { useNavigate } from "react-router-dom";
import Danger from "./Icons/Danger";
import Billetes from "./Icons/Billetes";
import Carro from "./Icons/Carro";

const CardButton = ({children,colorprimario,colorsecundario,tipo,dir}) => {

  const navigate = useNavigate();
  
  console.log(children);
    let Icon = '';
    switch(tipo){
      case 'Deudas':{ console.log(true); Icon = <Danger/>;
        break;
      }
      case 'Movimientos':{ Icon = <Billetes/>;
        break;
      }
      case 'Tiendas': {Icon = <Carro/>;
        break;
      }
   
    }
    return(
        <>
        <button className={`w-4/12 h-28 flex flex-col justify-center items-center rounded-md shadow-xl ${colorprimario}`}
      
        onClick={() => {navigate(dir)}}>
          <div className={`w-10 h-10 rounded-full ${colorsecundario} flex justify-center items-center`} >
             {Icon} 
          </div>
                {children}
          </button> 
        </>
    )
}

export default CardButton;