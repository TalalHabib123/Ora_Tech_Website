import React from "react";
import Cards from "./Cards";
import ReactPlayer from "react-player";
import "../Style.css";

const Clientele =()=>{
    const Financial_Sector=[
        {imagePath:'' , AltText:'Allied Bank'},
        {imagePath:'' , AltText:'HBL Bank'},
        {imagePath:'' , AltText:'Meezan Bank'},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:'Meezan Bank'},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''}
    ];

    const telecom_Sector=[
        {imagePath:'' , AltText:'Allied Bank'},
        {imagePath:'' , AltText:'HBL Bank'},
        {imagePath:'' , AltText:'Meezan Bank'},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''}
    ];

    const oil_sector=[
        {imagePath:'' , AltText:'Allied Bank'},
        {imagePath:'' , AltText:'HBL Bank'},
        {imagePath:'' , AltText:'Meezan Bank'},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''},
        {imagePath:'' , AltText:''}
    ];

    const logistic_Sector=[
        {imagePath:'' , AltText:'Allied Bank'},
        {imagePath:'' , AltText:'HBL Bank'},
        {imagePath:'' , AltText:'Meezan Bank'},
    ];

    return(
        <div className="clientele-body">
            <div className="clients">
                <h1 className="clients">
                    Our Clientele
                </h1>
            </div>
            <div className="finance">
                <h1>
                    Finanace Sector
                </h1>
                <Cards cardList={Financial_Sector}/>
            </div>
            <div className="telecom">
                <h1>
                    Telecom Sector
                </h1>
                <Cards cardList={telecom_Sector}/>
            </div>
            <div className="oil">
                <h1>
                    Oil & Gas Sector
                </h1>
                <Cards cardList={oil_sector}/>
            </div>
            <div className="logistic">
                <h1>
                    Logistics Sector
                </h1>
                <Cards cardList={logistic_Sector}/>
            </div>
            <div className="other">
                <h1>
                    Other Sector
                </h1>
                <div className="journey-video">
                    <ReactPlayer url={'https://www.ora-tech.com/assets/videos/otherclientele.mp4'} controls={true}  width={"100%"} height={"100%"}/>
                </div>
            </div>
        </div>
    );
}

export default Clientele;