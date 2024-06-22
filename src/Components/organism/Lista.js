import React from "react";

const Lista = ({elementos = ''}) => {

    const items = Array.isArray(elementos) ? elementos : [];

    return(
        <ul className="w-full mt-2">
          {
            items.map((e,index) =>(
                <li key={index}  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 gap-2">
                    <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <p className="text-xl font-bold text-[#05062D]">$10</p>
                    <p className="font-light text-sm">25, Diciembre</p>
                </div>
                    <p className="text-md text-[#666666] font-semibold">Ciro Sanchez</p>
              </div>

                </li>
            ))
          }  
      </ul>
    )
}

export default Lista;