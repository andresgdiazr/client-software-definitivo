import React from "react";

const InputSection = ({tag,type,name,value,handleInput}) =>{
    return(
        <div className="mb-6">
            <label htmlFor={`${tag}`} className="block text-base font-semibold mb-2 opacity-80">
                {tag}
            </label>
            <input
            type={type}
            id={tag}
            name={tag}
            value={value}
            onChange={(e) => handleInput({ name: `${name}`, value: e.target.value })}
            placeholder={`Ingresa tu ${name}`}
            required
            className="w-full h-10 px-2 border border-gray-300 rounded opacity-80"
          />
        </div>
    )
}

export default InputSection;