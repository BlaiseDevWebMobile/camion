import React from "react";
import car111 from '../../assets/car111.jpg'
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car1111.jpg'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardVertical from "../../Component/Actualite/CardVertical";
import CardHorizontal from "../../Component/Actualite/CardHorizontal";
import RadioBox from "./RadioBox";
import CardProduct from "./CardProduct";
function ProductSale() {
    return (
        <Container>
             {/* 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 */}
            <h3 className={'mb-3 mt-2'}>Actualités poids lourds et transport routier</h3>
            <Row>
                <Col lg={4} md={4} sm={4} xs={12}>
                    <RadioBox recherche={'Rech '} placeholder={'Rechercher'} />
                    <RadioBox recherche={'Com'} placeholder={'Commande'} />

                </Col>
                <Col lg={8} md={8} sm={8} xs={12}>
                    <h4 className={' text-uppercase mt-2 mb-4'}>Tous les camions de marques mercedes,Man,Scania,Daf</h4>
                    <CardProduct src={car2} title={'Camion merdeces Benz'} price={800000} contact={+257888888} description={'il est neuf'} />
                    <CardProduct src={car3} title={'Camion Scania'} price={700000} contact={+257777777} description={'il est neuf'} />
                    <CardProduct src={car111} title={'Camion Man'} price={800000} contact={+257999999} description={'il est neuf'} />
                    <CardProduct src={car2} title={'Camion merdeces Benz'} price={80000} contact={+257888888} description={'il est neuf'} />
                    <CardProduct src={car4} title={'Camion Daf'} price={800000} contact={+257888888} description={'il est neuf'} />

                </Col>


            </Row>

        </Container>
    );
}

export default ProductSale;