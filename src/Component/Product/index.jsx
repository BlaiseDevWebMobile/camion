import React from "react";
import './Product.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import car111 from '../../assets/car111.jpg'
function Product() {
    return (

       <Container>
           <Card style={{ width: '18rem' }} className={'flex-row'}>
               <Card.Img variant="top" src={car111} className={'col-md-4'}/>
               <Card.Body className={'col-md-8 cardd-block'}>
                   <Card.Title>Card Title</Card.Title>
                   <Card.Text>
                       Some quick example text to build on the card title and make up the bulk of
                       the card's content.
                   </Card.Text>
                   <Button variant="primary">Go somewhere</Button>
               </Card.Body>
           </Card>
       </Container>
    );
}

export default Product;