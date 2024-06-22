import React from "react";
import { useState } from "react";

const InputBuscador = ({input,fun}) => {
    return( 
        <>
            <input
                type="search"
                class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                placeholder="Busca tu tienda de preferencia"
                aria-label="Search"
                value={input}
                id="exampleFormControlInput2"
                aria-describedby="button-addon2" 
                onChange={(e) => {fun(e.target.value)}}
            />

        </>
    )
}
export default InputBuscador;