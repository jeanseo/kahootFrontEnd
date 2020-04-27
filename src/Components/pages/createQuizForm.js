import React, { Component } from "react";
import {
    Container,
    Row,
    Col, Form, Card
} from "react-bootstrap";

class editProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Question 1</h1>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control plaintext type="text" placeholder="Ecrivez la question" />
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Limite de temps</Form.Label>
                                    <Form.Control as="select" value="20">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>60</option>
                                        <option>90</option>
                                        <option>120</option>
                                        <option>240</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Points</Form.Label>
                                    <Form.Control as="select" value="20">
                                        <option>0</option>
                                        <option>1000</option>
                                        <option>2000</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Card>
                                        <Card.Header as="h5"></Card.Header>
                                        <Card.Title>
                                            <Form.Control plaintext type="text" placeholder="Réponse 1" />
                                        </Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Header as="h5"></Card.Header>
                                        <Card.Title>
                                            <Form.Control plaintext type="text" placeholder="Réponse 2" />
                                        </Card.Title>
                                    </Card>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Card>
                                        <Card.Header as="h5"></Card.Header>
                                        <Card.Title>
                                            <Form.Control plaintext type="text" placeholder="Réponse 3" />
                                        </Card.Title>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Header as="h5"></Card.Header>
                                        <Card.Title>
                                            <Form.Control plaintext type="text" placeholder="Réponse 4" />
                                        </Card.Title>
                                    </Card>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default editProfile;