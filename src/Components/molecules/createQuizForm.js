import React, {Component, useState} from "react";
import {
    Container,
    Row,
    Col, Form, Card, Button
} from "react-bootstrap";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const CREATE_QUIZ = gql`
        mutation{
  quizCreateOne(record:{
    name: "quiz videu"
  }) {
    recordId
  }
  
}
        `
;



const CreateQuizForm = () => {
    const [question, setQuestion] = useState('');
    const [timeLimit, setTimeLimit] = useState(20);
    const [points, setPoints] = useState(1000);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const [createQuiz] = useMutation(CREATE_QUIZ);

    return (

                <Container>
                    <Row>
                        <Col>
                            <h1>Question 1</h1>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log("submit");
                                    createQuiz({variables: {name: question }})

                                }}
                            >
                                <Form.Row>
                                    <Col>
                                        <Form.Control plaintext type="text"
                                                      value={question}
                                                      onChange={e => setQuestion(e.target.value)}
                                                      placeholder="Ecrivez la question" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Limite de temps</Form.Label>
                                        <Form.Control as="select" value={timeLimit}
                                                      onChange={e => setTimeLimit(e.target.value)}>
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
                                        <Form.Control as="select"
                                                      value={points}
                                                      onChange={e => setPoints(e.target.value)}>
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
                                                <Form.Control plaintext type="text" placeholder="Réponse 1"
                                                              value={answer1}
                                                              onChange={e => setAnswer1(e.target.value)}
                                                />
                                            </Card.Title>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 2"
                                                              value={answer2}
                                                              onChange={e => setAnswer2(e.target.value)}
                                                />
                                            </Card.Title>
                                        </Card>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 3"
                                                              value={answer3}
                                                              onChange={e => setAnswer3(e.target.value)}
                                                />
                                            </Card.Title>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 4"
                                                              value={answer4}
                                                              onChange={e => setAnswer4(e.target.value)}
                                                />
                                            </Card.Title>
                                        </Card>
                                    </Col>
                                </Form.Row>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                    </Row>

                </Container>
        );
};

export default CreateQuizForm;