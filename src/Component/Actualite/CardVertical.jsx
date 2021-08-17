import React from 'react';
import {Button, Card, Nav} from "react-bootstrap";
import car1 from "../../assets/car1.jpg";

const CardVertical = (props) => {
    return (
        <Card style={{ width: '25rem' }} className={'shadow mt-2 flex-row flex-wrap'}>
            <Nav.Link href="camion_man">
                <Card.Img variant="top" src={props.src}  />
            </Nav.Link>

            <Card.Body>
                <Card.Title>Camion Daf</Card.Title>
                <Card.Text>
                    Notre site utilise des cookies pour vous garantir une expérience
                    utilisateur optimale, vous offrir des services adaptés à vos centres
                    d’intérêt et vous proposer des publicités pertinentes, aussi bien sur nos pages
                    que sur celles de tiers. En cliquant sur “J’accepte”, vous consentez
                    à l’utilisation de ces cookies à ces fins.
                </Card.Text>
                <Button variant="primary">More</Button>
            </Card.Body>
        </Card>
    );
};

export default CardVertical;
