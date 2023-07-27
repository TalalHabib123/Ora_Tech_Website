import React, { useState } from 'react';
import { CButton} from '@coreui/react';
import { CSSTransition } from 'react-transition-group';
import Custom_Timeline from './CustomTimeline';

const CollapsibleComponent = () => {
    const [visible, setVisible] = useState(false);

    const handleClick=(targetId)=>{
      console.log(targetId);
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const elementRect = targetElement.getBoundingClientRect();
        const offsetTop = elementRect.top;
        const middleOfScreen = window.innerHeight / 5;
        const scrollPosition = offsetTop - middleOfScreen + window.scrollY;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      }
    };

  return (
    <div className="collapsed-service">
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
        <div className="collapsed-container">
              {visible && <Custom_Timeline />}
        </div>
      </CSSTransition>
      {visible && 
        <div className='collapse-link-toggle'>
              <CButton
                  href="#"
                  onClick={(event) => {
                  event.preventDefault();
                  setVisible(!visible);
                  handleClick(".collapsed-service");
                  }}
                  className="collapsible-link"
                  style={{ border: 'none' }}
              >
                Show Less Details
              </CButton>
          </div>}
    </div>
  );
};

export default CollapsibleComponent;
