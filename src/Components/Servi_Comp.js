import React from 'react';
import "./Style.css";
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  max-width: 80%;
  margin: 0 auto;
  padding-top:4%;
  padding-bottom:5%;
`;

const Card = styled.div`
  background-color: #f1f1f1;
  justify-content:center;
  align-items:center;
  text-align: center;
  padding-top:30%;
  padding-bottom:30%;
  padding-left:30%;
  padding-right:30%;
  color:#ffffff;
  font-size: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`;
const Servi_Comp = () => {
    let win_width=window.innerWidth;
    if(win_width>500){
        return (
            <CardGridWrapper>
                <Card style={{background:'url(https://www.cioaxis.com/wp-content/uploads/2021/04/Cloud-INfrasture220604499.jpeg) center / cover', color:"#000000"}}>Oracle Cloud Infrastructure</Card>
                <Card style={{background:'url(https://www.nagarro.com/hubfs/Oracle%20cloud%20infrastructure.png) center / cover'}}>Oracle Cloud Applications</Card>
                <Card style={{background:'url(https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt3fb601577ca72826/632dfca7378d7a585394478e/cloudarchitecture-ArtemisDiana_AlamyStockPhoto.jpg) center / cover'}}>Oracle Fusion Middleware</Card>
                <Card style={{background:'url(https://www.hyperledger.org/wp-content/uploads/2016/08/hl_bg_banner.jpg) center / cover'}}>BlockChain</Card>
                <Card style={{background:'url(https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2022/04/28112755/shutterstock_1806547387-1024x631.jpg) center / cover'}}>Hardware & Software</Card>
                <Card style={{background:'url(https://www.ibis-solutions.rs/wp-content/uploads/2021/06/group-people-network-circuit-board-link-connection-technology-1-1.jpg) center / cover'}}>Enterprise Wide Integration</Card>
                <Card style={{background:'url(https://as2.ftcdn.net/v2/jpg/01/34/31/79/1000_F_134317941_li6kQGjxitx2oDONDgHmshYWhbAZJeov.jpg) center / cover'}}>Software Solutions Experience</Card>
                <Card style={{background:'url(https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Hardware%20Section%201.jpeg) center / cover'}}>Hardware Solutions Experience</Card>
            </CardGridWrapper>
        );
    }
    else{
        return(
            <Container fluid>
                <Row>
                    <Col>Oracle Cloud Infrastructure</Col>
                </Row>
                <Row>
                    <Col>Oracle Cloud Applications</Col>
                </Row>
                <Row>
                    <Col>Oracle Fusion Middleware</Col>
                </Row>
                <Row>
                    <Col>BlockChain</Col>
                </Row>
                <Row>
                    <Col>Hardware & Software</Col>
                </Row>
                <Row>
                    <Col>Enterprise Wide Integration</Col>
                </Row>
                <Row>
                    <Col>Software Solutions Experience</Col>
                </Row>
                <Row>
                    <Col>Hardware Solutions Experience</Col>
                </Row>
            </Container>
        );
    }
  
};

export default Servi_Comp;
