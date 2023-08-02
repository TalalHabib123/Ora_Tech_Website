import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ControlledCarousel from './Carasouel';

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  max-width: 80%;
  margin: 0 auto;
  padding-top:2%;
  padding-bottom:2%;
`;

const Card = styled.div`
  background-color: #f1f1f1;
  justify-content:center;
  align-items:center;
  text-align: center;
  padding-top:30%;
  padding-bottom:30%;
  color:#ffffff;
  font-size: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`;


const Servi_Comp = ({ onIndexClick }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleClick = (index) => {
      onIndexClick(index); 
    };

    if(windowWidth>800){
        return (
            <CardGridWrapper className='theGridWrapper'>
                <Card className='service_card' style={{background:'url(https://www.cloud4c.com/sites/default/files/2021-12/oracle-cloud-services-1_0.jpg) center / cover'}} onClick={() => handleClick(0)}>Oracle Cloud Infrastructure</Card>
                <Card className='service_card' style={{background:'url(https://www.nagarro.com/hubfs/Oracle%20cloud%20infrastructure.png) center / cover'}} onClick={() => handleClick(1)}>Oracle Cloud Applications</Card>
                <Card className='service_card' style={{background:'url(https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt3fb601577ca72826/632dfca7378d7a585394478e/cloudarchitecture-ArtemisDiana_AlamyStockPhoto.jpg) center / cover'}} onClick={() => handleClick(2)}>Oracle Fusion Middleware</Card>
                <Card className='service_card' style={{background:'url(https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg) center / cover'}} onClick={() => handleClick(3)}>BlockChain</Card>
                <Card className='service_card' style={{background:'url(https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2022/04/28112755/shutterstock_1806547387-1024x631.jpg) center / cover'}} onClick={() => handleClick(4)}>Hardware & Software</Card>
                <Card className='service_card' style={{background:'url(https://www.ibis-solutions.rs/wp-content/uploads/2021/06/group-people-network-circuit-board-link-connection-technology-1-1.jpg) center / cover'}} onClick={() => handleClick(5)}>Enterprise Wide Integration</Card>
                <Card className='service_card' style={{background:'url(https://as2.ftcdn.net/v2/jpg/01/34/31/79/1000_F_134317941_li6kQGjxitx2oDONDgHmshYWhbAZJeov.jpg) center / cover'}} onClick={() => handleClick(6)}>Software Solutions Experience</Card>
                <Card className='service_card' style={{background:'url(https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Hardware%20Section%201.jpeg) center / cover'}} onClick={() => handleClick(7)}>Hardware Solutions Experience</Card>
            </CardGridWrapper>
        );
    }
    else{
        return(
            <ControlledCarousel Index_Set={handleClick}/>
        );
    }
  
};

export default Servi_Comp;
