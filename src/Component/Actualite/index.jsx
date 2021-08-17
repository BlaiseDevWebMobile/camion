import React from 'react';
import './Actualite.css'
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car11 from '../../assets/car11.jpg'
import car1111 from '../../assets/car1111.jpg'
import Product from "../Product";
import CardVertical from "./CardVertical";
import CardHorizontal from "./CardHorizontal";

const Actualite = () => {
    return (
        <Container>
            <h3 className={'mb-3 mt-2'}>Actualités poids lourds et transport routier</h3>
            <Row>
                <Col lg={4} md={4} sm={4} xs={12}>
                    <CardVertical src={car3} />
                    <CardVertical src={car2} />
                </Col>
                <Col lg={8} md={8} sm={8} xs={12}>
                    <CardHorizontal src={car1111} />
                    <CardHorizontal src={car1} />
                    <CardHorizontal src={car1111} />
                    <CardHorizontal src={car11} />
                    <CardHorizontal src={car11} />
                </Col>


            </Row>

        </Container>
    );
};

export default Actualite;
