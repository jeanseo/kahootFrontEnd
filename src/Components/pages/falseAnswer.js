import React, { Component } from "react";
import "./falseAnswer.css";
import { Container, Row, Col } from 'reactstrap';

class falseAnswer extends Component {
    render() {
        return (
            <div>
                <h1 class="q1titlecorrectanswer">
                    Réponse 1 :
                    </h1>
                <div class="falsecolone">
                <Container >
                        <Row xs="2">
                            <div class="false">
                                <p>Faux !</p>
                            </div>
                        </Row>
                        <Row xs="2">
                            <div class="false">
                                <p> 0 points  </p>
                            </div>
                        </Row>
                        <Row xs="2">
                            <div class="riennesert">
                                <p> Rien ne sert de courir, il faut partir à point. </p>
                            </div>
                        </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default falseAnswer;
