import React, { Component } from "react";
import TopNavBar from "../molecules/topNavBar";
import {Col, Container, Row} from "react-bootstrap";

class editProfile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><h2>Votre profil</h2></Col>
                </Row>
            </Container>
        );
    }
}

export default editProfile;