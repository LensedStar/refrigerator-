import React from "react";

import "./ButtonStyle.scss";


export default function Button({children,property}){
    return(
        <button  className="button" style={{...property}}>
            {children}
        </button>
    )
}