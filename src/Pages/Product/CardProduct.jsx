import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import car111 from '../../assets/car111.jpg'
import './Product.css'
function CardProduct(props) {
    return (
        <>
            <div className="card flex-row flex-wrap mt-2 shadow">
                <div className="card-header border-0 col-md-4">
                    <img src={props.src} alt="" className={'img-fluid'} />
                </div>
                <div className="card-block px-2 col-md-8">
                    <h4 className="card-title titleColor" >{props.title}</h4>
                    <p className="card-text">
                        <h5>Prix: {props.price}</h5>
                    </p>
                    <hr />
                    <p className="card-text">
                        <h5>Contact: {props.contact}</h5>
                    </p>
                    <hr />
                    <p className="card-text">
                        <h5>Description: {props.description}</h5>
                    </p>

                </div>

            </div>
        </>

    );
}

export default CardProduct;