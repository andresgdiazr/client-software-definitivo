import React from "react";

const Button = ({children}) => {
    return(
        <>
         <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
            {children}
         </button>
        </>
    )
}

export default Button;