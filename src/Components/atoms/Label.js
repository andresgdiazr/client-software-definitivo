import React from "react";

const label = {
    fontsize: '1rem',
    marginbottom: '0.5rem',
    fontWeight: 600,
    opacity: 0.8,
}

const Label = ({children}) => {
    return(
        <label style={label}>{children}</label>
    )
}

export default Label;
