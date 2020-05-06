import React, { Component } from "react";
import "./QuestionStudent.css";
import { Container, Row, Col } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Link, NavLink } from "react-router-dom";

class QuestionStudent extends Component {
    render() {
        return(
            <div>
                <div class="titreReponseQ1">
                    <h1>
                        Quelle est la réponse ?
                    </h1>
                    
                </div>
                <div class="divreponse">
                    <Container fluid>
                        <Row xs="2">
                            <div class="transparent" >
                                <LinkContainer to="/q1correctanswer">
                                    <NavLink to="/q1correctanswer">
                                    <div class="userreponse1">
                                        <Col>
                                            <p>
                                            </p>
                                        </Col>
                                    </div>
                                    </NavLink>
                                </LinkContainer>
                            </div>
                            <div class="transparent" >
                                <LinkContainer to="/q1falseanswer">
                                    <NavLink to="/q1falseanswer">
                                    <div class="userreponse2">
                                        <Col>
                                            <p>
                                            </p>
                                        </Col>
                                    </div>
                                    </NavLink>
                                </LinkContainer>
                            </div>
                            <div class="transparent" >
                                <LinkContainer to="/q1falseanswer">
                                    <NavLink to="/q1falseanswer">
                                    <div class="userreponse3">
                                        <Col>
                                            <p>
                                            </p>
                                        </Col>
                                    </div>
                                    </NavLink>
                                </LinkContainer>
                            </div>
                            <div class="transparent" >
                                <LinkContainer to="/q1falseanswer">
                                    <NavLink to="/q1falseanswer">
                                    <div class="userreponse4">
                                        <Col>
                                            <p>
                                            </p>
                                        </Col>
                                    </div>
                                    </NavLink>
                                </LinkContainer>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
              );
            }
        }

        export default QuestionStudent;
