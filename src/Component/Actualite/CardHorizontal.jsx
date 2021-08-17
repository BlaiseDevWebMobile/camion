import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import car111 from '../../assets/car111.jpg'
function CardHorizontal() {
    return (
        <>
            <div className="card flex-row flex-wrap mt-2 shadow">
                <div className="card-header border-0 col-md-4">
                    <img src={car111} alt="" className={'img-fluid'}/>
                </div>
                <div className="card-block px-2 col-md-8">
                    <h4 className="card-title">Camion mercedes Benze</h4>
                    <p className="card-text">
                        Notre site utilise des cookies pour vous garantir une expérience
                        utilisateur optimale, vous offrir des services adaptés à vos centres
                        d’intérêt et vous proposer des publicités pertinentes, aussi bien sur nos pages
                        que sur celles de tiers. En cliquant sur “J’accepte”, vous consentez
                        à l’utilisation de ces cookies à ces fins.
                    </p>
                </div>

            </div>
        </>

    );
}

export default CardHorizontal;