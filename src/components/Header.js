import React from "react";
import Trollface from "../images/Trollface.png"
export default function(){
    return(
        <div className="header">
            <img src={Trollface} className="header--img"/>
            <h1 className="header--name">MemeGen</h1>

        </div>
    )
}