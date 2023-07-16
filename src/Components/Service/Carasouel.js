import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Style.css"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slide-show'>
        <Carousel activeIndex={index} onSelect={handleSelect} className='custom-cara'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                />
                <Carousel.Caption>
                <h2>Oracle Cloud Infrastructure</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                />

                <Carousel.Caption>
                <h2>Oracle Cloud Applications</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>Oracle Fusion Middleware</h2>
                 </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>BlockChain</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>Hardware & Software</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>Enterprise Wide Integration</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>Software Solutions Experience</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                />

                <Carousel.Caption>
                <h2>Hardware Solutions Experience</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default ControlledCarousel;