import React from "react";
import "./Style.css";
import Servi_Comp from "./Servi_Comp";
import ControlledCarousel from "./Carasouel";

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