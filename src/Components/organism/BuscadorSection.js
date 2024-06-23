import React from "react";
import InputBuscador from "../atoms/InputBuscador";
import Buscador from "../atoms/Icons/Buscador";

const BuscadorSection = ({input,fun}) => {



    return(
        <div class="relative flex">
            <InputBuscador input={input} fun={fun}/>
            <Buscador />
        </div>
    )
}

export default BuscadorSection;