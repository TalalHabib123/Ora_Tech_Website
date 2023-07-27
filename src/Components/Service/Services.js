import React from "react";
import Servi_Comp from "./Servi_Comp";
import CollapsibleComponent from "./Collapsed_Comp";

function Service(){
    return(
        <><div className="service">
            <h1>
                Our Services
            </h1>
            <Servi_Comp />
        </div><CollapsibleComponent /></>
    );
}

export default Service;