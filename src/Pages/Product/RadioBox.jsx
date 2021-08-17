import React from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";

const RadioBox = (props) => {
    return (
        <Form>
            <Form.Group as={Row} className="mt-5" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    {props.recherche}:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text " placeholder={props.placeholder} />
                </Col>
            </Form.Group>
            <fieldset className='justify-content-center'>
                <Form.Group as={Row} className="mb-3 mt-5">

                    <Col sm={10} className={'px-5'}>
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Benne (820)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Plateau (820)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Fourgon (720)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Polybenne (112)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Citerne (751)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Savoyarde (404) "
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Porte Voiture (225)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Grue mobile (514)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                        <Form.Check
                            className={'mt-3'}
                            type="radio"
                            label="Béton (397)"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

        </Form>
    );
};

export default RadioBox;
