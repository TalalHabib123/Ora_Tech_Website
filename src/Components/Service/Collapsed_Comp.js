import React, { useState } from 'react';
import { CButton, CCard, CCardBody } from '@coreui/react';
import { CSSTransition } from 'react-transition-group';
import "../Style.css";
import VerticalAlternatingTimeline from './Timeline_Comp';

const CollapsibleComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="collapsed">
        <div className='collapse-link-toggle'>
            <CButton
                href="#"
                onClick={(event) => {
                event.preventDefault();
                setVisible(!visible);
                }}
                className="collapsible-link"
                style={{ border: 'none' }}
            >
                {visible ? 'Show Less Details' : 'Show More Details'}
            </CButton>
        </div>
      <CSSTransition in={visible} timeout={300} classNames="collapsed-card-transition" unmountOnExit>
        <div className="collapsed-card-container">
          <CCard className="collapsed-card">
            <CCardBody className='collapsed-card-body'>
                <VerticalAlternatingTimeline />
            </CCardBody>
          </CCard>
        </div>
      </CSSTransition>
    </div>
  );
};

export default CollapsibleComponent;
