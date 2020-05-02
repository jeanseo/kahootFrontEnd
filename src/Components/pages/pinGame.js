import React, { Component } from "react";
import {Button } from 'reactstrap';
import "./pinGame.css";

import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col } from 'reactstrap';


class pinGame extends Component {
    render() {
        return (
            <div class="all">
                <div class="quizzname">
                        Quizz 1 : test
                </div>
                <div class="pin">
                        <p class="pintext"> 
                            Code pin : 123456
                        </p>
                </div>
                <div class="pin">
                    <h2>
                          Joueurs
                    </h2>
                    <Row>
                        <Col className="col">
                            <Row class="row">
                                Toto
                            </Row>
                            <Row>
                                Titi
                            </Row>
                            <Row>
                                Tata
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                Toto
                            </Row>
                            <Row>
                                Titi
                            </Row>
                            <Row>
                                Tata
                            </Row>
                        </Col>
                    </Row> 
                </div>
                <div class="start" >
                    <LinkContainer to="/startgame">
                        <Button color="success">
                            START
                        </Button>
                    </LinkContainer>
                </div>
              
            </div>

        );
    }
}

export default pinGame;