import React,{useState} from "react";
import Cards from "./Cards";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
//Images Imports
import Meezan from "../Clientele/Images/Finance/Meezan.png";
import UBL from "../Clientele/Images/Finance/ubl.png";
import HBL from "../Clientele/Images/Finance/HBL.jpg";
import MCB from "../Clientele/Images/Finance/mcb.jpeg";
import Askari from "../Clientele/Images/Finance/askari.jpg";
import Faysal from "../Clientele/Images/Finance/Faysal.png";
import Allied from "../Clientele/Images/Finance/allied.png";
import NSRP from "../Clientele/Images/Finance/nsrp.png";
import Mobilink from "../Clientele/Images/Finance/mobilink.jpg";


import Ufone from "../Clientele/Images/Telecom/Ufone.jpg";
import PTA from "../Clientele/Images/Telecom/pta.jpg";
import PTCL from "../Clientele/Images/Telecom/ptcl.png";
import USF from "../Clientele/Images/Telecom/USF.png";
import Telenor from "../Clientele/Images/Telecom/telenor.jpeg";

import ARL from "../Clientele/Images/Oil_Gas/atrl.png";
import SSGC from "../Clientele/Images/Oil_Gas/SSGC.jpg";
import POL from "../Clientele/Images/Oil_Gas/POL.jpg";
import OP from "../Clientele/Images/Oil_Gas/O_P.jpeg";

import BHP from "../Clientele/Images/Logistics/BHP.jpg";
import DP from "../Clientele/Images/Logistics/dp_world.png";
import KUFPEC from "../Clientele/Images/Logistics/kufpec.png";

const Clientele =()=>{
    const Financial_Sector=[
        {imagePath:UBL , AltText:'UBL Bank'},
        {imagePath:HBL , AltText:'HBL Bank'},
        {imagePath:Meezan , AltText:'Meezan Bank'},
        {imagePath:MCB , AltText:'MCB Bank'},
        {imagePath:Askari , AltText:'Askari'},
        {imagePath:Faysal , AltText:'Faysal Bank'},
        {imagePath:Allied , AltText:'Allied Bank'},
        {imagePath:NSRP , AltText:'NRSP Bank'},
        {imagePath:Mobilink , AltText:'Mobilink Bank'}
    ];

    const telecom_Sector=[
        {imagePath:Ufone , AltText:'Ufone'},
        {imagePath:PTA , AltText:'PTA'},
        {imagePath:PTCL , AltText:'PTCL'},
        {imagePath:USF , AltText:'Universal Service Fund'},
        {imagePath:Telenor , AltText:'Telenor'}
    ];

    const oil_sector=[
        {imagePath:ARL , AltText:'Attock Refinery'},
        {imagePath:OP , AltText:'Orient Petroleum'},
        {imagePath:POL , AltText:'Pakistan Oilrefinery'},
        {imagePath:SSGC , AltText:'SSGC'}
    ];

    const logistic_Sector=[
        {imagePath:BHP , AltText:'BHP'},
        {imagePath:DP , AltText:'DP World'},
        {imagePath:KUFPEC , AltText:'KUFPEC'},
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div className="clientele-body">
            <div className="clients">
                <h1 className="clients">
                    Our Clientele
                </h1>
            </div>
            <div className="carasouel-slides">
                <Carousel activeIndex={index} onSelect={handleSelect} 
                className='custom-cara-2'>
                    <Carousel.Item className="item-2">
                        <Carousel.Caption className="caption-2">
                            <h1>Finanace Sector</h1>
                            <Cards cardList={Financial_Sector}/>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="item-2">
                        <Carousel.Caption className="caption-2">
                            <h1>Telecom Sector</h1>
                            <Cards cardList={telecom_Sector}/>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="item-2">
                        <Carousel.Caption className="caption-2"  >
                            <h1>Oil & Gas Sector</h1>
                            <Cards cardList={oil_sector}/>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="item-2">
                        <Carousel.Caption className="caption-2">
                            <h1>Logistics Sector</h1>
                            <Cards cardList={logistic_Sector}/>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="item-2">
                        <Carousel.Caption className="caption-2">
                            <h1>Other Sector</h1>
                            <div className="journey-video">
                                <ReactPlayer url={'https://www.ora-tech.com/assets/videos/otherclientele.mp4'} controls={true}  width={"100%"} height={"90%"}/>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
            </div>
        </div>
    );
}

export default Clientele;