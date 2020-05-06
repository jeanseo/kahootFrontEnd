import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><h2>Bienvenue sur Kahoot!</h2></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;