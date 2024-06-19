import React from "react";

const CardButton = ({children,colorprimario,colorsecundario}) => {

    return(
        <>
        <div className={`w-4/12 h-28 flex flex-col justify-center items-center rounded-md shadow-xl bg-[${colorprimario}]`}>
          <div className={`w-10 h-10 rounded-full bg-[${colorsecundario}]`} >
                
          </div>
                <p>
                  Deudas
                </p>
          </div> 
        </>
    )
}

export default CardButton;