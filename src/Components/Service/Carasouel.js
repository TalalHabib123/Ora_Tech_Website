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
        <Carousel activeIndex={index} onSelect={handleSelect} 
        className='custom-cara'>
            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://www.cloud4c.com/sites/default/files/2021-12/oracle-cloud-services-1_0.jpg"
                        alt='Oracle Cloud Infrastructure'
                    />
                </div>
                
                <Carousel.Caption>
                <h2>Oracle Cloud Infrastructure</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                    className="d-block w-100"
                    src="https://www.nagarro.com/hubfs/Oracle%20cloud%20infrastructure.png"
                    alt='Oracle Cloud Applications'
                    />
                </div>
                

                <Carousel.Caption>
                <h2>Oracle Cloud Applications</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt3fb601577ca72826/632dfca7378d7a585394478e/cloudarchitecture-ArtemisDiana_AlamyStockPhoto.jpg"
                        alt='Oracle Fusion Middleware'
                    />   
                </div>
                

                <Carousel.Caption>
                <h2>Oracle Fusion Middleware</h2>
                 </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg"
                        alt='BlockChain'
                    />
                </div>
                

                <Carousel.Caption>
                <h2>BlockChain</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2022/04/28112755/shutterstock_1806547387-1024x631.jpg"
                        alt='Hardware & Software'
                    />
                </div>
                

                <Carousel.Caption>
                <h2>Hardware & Software</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://www.ibis-solutions.rs/wp-content/uploads/2021/06/group-people-network-circuit-board-link-connection-technology-1-1.jpg"
                        alt='Enterprise Wide Integration'
                    />
                </div>
                
                <Carousel.Caption>
                <h2>Enterprise Wide Integration</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='carousel-image-wrapper'>
                    <img
                        src="https://as2.ftcdn.net/v2/jpg/01/34/31/79/1000_F_134317941_li6kQGjxitx2oDONDgHmshYWhbAZJeov.jpg"
                        alt='Software Solutions Experience'
                    />
                </div>
                <Carousel.Caption>
                <h2>Software Solutions Experience</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-image-wrapper">
                    <img
                    className="d-block w-100"
                    src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Hardware%20Section%201.jpeg"
                    alt='Oracle Cloud Infrastructure'
                /></div>
                <Carousel.Caption>  
                <h2>Hardware Solutions Experience</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default ControlledCarousel;