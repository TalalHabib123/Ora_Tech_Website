import React,{useState} from "react";
import Servi_Comp from "./Servi_Comp";
import CollapsibleComponent from "./Collapsed_Comp";
import FadeInSection from "../FadIn";

function Service(){
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visible, setVisible] = useState(false);
    const handleIndexClick = (index) => {
        setSelectedIndex(index);
        setVisible(true);
    };

    const setVisibility = (value) => {
    setVisible(value);
  };

    return(
        <FadeInSection><div className="service">
            <h1>
                Our Services
            </h1>
            <Servi_Comp onIndexClick={handleIndexClick}/>
        </div><CollapsibleComponent selectedIndex={selectedIndex} visible={visible} setVisibility={setVisibility}/></FadeInSection>
    );
}

export default Service;