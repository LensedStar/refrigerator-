import React from "react";

import "./ButtonStyle.scss";


export default function Button({children,property,handleClick}) {
    return(
        <button  className="button" style={{...property}} onClick={handleClick}>
            {children}
        </button>
    )
}