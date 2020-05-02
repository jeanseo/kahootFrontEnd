import React, { Component } from "react";
import "./correstAnswer.css";
import { Container, Row, Col } from 'reactstrap';

class correctAnswer extends Component {
    render() {
        return (
            <div>
                <h1 class="q1titlecorrectanswer">
                    Réponse 1 :
                    </h1>
                <div class="correctcolone">
                <Container >
                        <Row xs="2">
                            <div class="correct">
                                <p>Correct !</p>
                            </div>
                        </Row>
                        <Row xs="2">
                            <div class="correct">
                                <p> +25 points </p>
                            </div>
                        </Row>
                        <Row xs="2">
                            <div class="correct">
                                <p> Répondu en 4 secondes ! (1er) </p>
                            </div>
                        </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default correctAnswer;
