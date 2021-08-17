import React from 'react';
import leftImage from '../../assets/car1.jpg'
import camion from '../../assets/camion.jpg'
import camion2 from '../../assets/camion2.jpg'
import rightImage from '../../assets/car11.jpg'
import middleImage from '../../assets/car111.jpg'
import lastImage from '../../assets/car1111.jpg'
import './RowCamion.css'
import { Card, Col, Container, Image, Nav, NavLink, Row } from "react-bootstrap";
import car1 from "../../assets/car1.jpg";


const RowCamion = () => {
    return (
        <Container className={'mainPhoto '}>
            <h3>Annonces de camions d'occasion</h3>
            <Row className={'mainRowImage'}>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}  >
                                <small className="text-white text-capitalize footertext ">remorque <span className={'prix'}>( 350 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>

                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion2} alt="Card image" />
                            <Card.Footer className={'footerCard'} >
                                <small className="text-white text-capitalize footertext ">camion  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">remorque  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">semi remorque  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
            </Row>
            <Row className={'mainRowImage'}>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">tracteur  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">remorque  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">remorque  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12}>
                    <Nav.Link href="camion_man">
                        <Card className="bg-dark text-white border-white shadow ">
                            <Card.Img src={camion} alt="Card image" />
                            <Card.Footer className={'footerCard'}>
                                <small className="text-white text-capitalize footertext ">remorque  <span className={'prix'}>( 820 )</span></small>
                            </Card.Footer>
                        </Card>
                    </Nav.Link>
                </Col>
            </Row>
        </Container>
    );
};

export default RowCamion;
