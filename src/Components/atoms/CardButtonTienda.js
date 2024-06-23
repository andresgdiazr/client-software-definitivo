import React from "react";
import Buscador from "./Icons/Buscador";
import Billetes from "./Icons/Billetes";
import { useNavigate } from "react-router-dom";


const CardButtonTienda = ({colorprimario,colorsecundario,item,children}) => {
    
    const navigate = useNavigate();
    console.log("hola");
    
    return(
            <>
            <button className={`w-full lg:w-1/2 h-28 flex flex-row justify-between p-5 items-center rounded-t-2xl rounded-bl-2xl shadow-xl ${colorprimario}`}
            onClick={() =>{navigate(`${item}`)}}
            >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${colorsecundario}`}>

                    {
                        item == "consultar" ? (<Buscador/>) : (<Billetes/>)
                    }
                </div>
                {children}
                <button className={`w-10 h-10 rounded-full bg-white flex items-center justify-center`}>
                    <p className="font-bold">+</p>
                </button>
            </button>
            </>
    )
}

export default CardButtonTienda;