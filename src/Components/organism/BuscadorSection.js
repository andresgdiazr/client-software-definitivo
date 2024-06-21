import React from "react";
import InputBuscador from "../atoms/InputBuscador";
import Buscador from "../atoms/Icons/Buscador";

const BuscadorSection = () => {

    const text='';

    console.log(text);

    return(
        <div class="relative flex">
            <InputBuscador text={text}/>
            <Buscador />
        </div>
    )
}

export default BuscadorSection;