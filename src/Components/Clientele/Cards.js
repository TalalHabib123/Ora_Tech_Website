import React from "react";
import Card from 'react-bootstrap/Card';
import { CardImg } from "react-bootstrap";

const Cards=({cardList})=>{
    return(
        <div className="card-row-sec">
        {cardList.map((card, index) => (
            <Card key={index} className="custom-card-sec">
            <Card.Body className="card-body-comp">
                <CardImg 
                    src={card.imagePath} 
                    alt={card.AltText} 
                    className="card-image"
                    style={{ objectFit: 'contain', objectPosition: 'center'}}
                />
            </Card.Body>
            </Card>
        ))}
    </div>
    );
}

export default Cards;