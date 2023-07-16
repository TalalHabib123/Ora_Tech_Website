import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Style.css';

const CardComponent = ({ cardList }) => {
  return (
    <div className="card-row">
      {cardList.map((card, index) => (
        <Card key={index} className="custom-card">
          <Card.Body className="card-body-comp">
            <div className="icon-container">
              <FontAwesomeIcon icon={card.icon} size="4x" className="icon" />
            </div>
            <div className="content">
              <Card.Text className='text'>{card.text}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;

