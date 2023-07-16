import React from "react";
import "../Style.css";
import Servi_Comp from "./Servi_Comp";

function Service(){
    return(
        <div className="service">
            <h1>
                Our Services
            </h1>
            <Servi_Comp />
        </div>
    );
}

export default Service;