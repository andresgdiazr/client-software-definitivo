import React from "react";

const CardButtonTienda = ({colorprimario,colorsecundario,children}) => {
    return(
            <>
            <button className={`w-full lg:w-1/2 h-28 flex flex-row justify-between p-5 items-center rounded-t-2xl rounded-bl-2xl shadow-xl ${colorprimario}`}
            >
                <div className={`w-14 h-14 rounded-full ${colorsecundario}`}></div>
                {children}
                <button className={`w-10 h-10 rounded-full bg-white flex items-center justify-center`}>
                    <p className="font-bold">+</p>
                </button>
            </button>
            </>
    )
}

export default CardButtonTienda;