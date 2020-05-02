import React, {Component, useEffect, useState} from "react";
import {
    Container,
    Row,
    Col, Form, Card, Button
} from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";




const CreateQuizForm = ({question: questionToEdit, saveQuestion}) => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const [question, setQuestion] = useState(
        {
            _id : questionToEdit._id,
            question: questionToEdit.question,
            time: questionToEdit.time,
            points: questionToEdit.points}
            );
    console.log("avant");
    console.log(questionToEdit);
    console.log("après");
    console.log(question);

    const importQuestion = async () => {
        await setQuestion({
            _id : questionToEdit._id,
            question: questionToEdit.question,
            time: questionToEdit.time,
            points: questionToEdit.points});
        console.log("after");
        console.log(question);

    };

    const saveChanges = () =>{
        console.log('save changes')
        saveQuestion(question);
    };

    //const [createQuiz] = useMutation(CREATE_QUIZ);


    useEffect( () => {
        importQuestion();

    }, [questionToEdit]);

    return (
                <Container>
                    <Row>
                        <Col>
                            <h1>Question 1</h1>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log("submit");

                                }}
                            >
                                <Form.Row>
                                    <Col>
                                        <Form.Control plaintext type="text"
                                                      value={question.question || ''}
                                                      onChange={e => setQuestion(
                                                          {...question, question: e.target.value }
                                                      )}
                                                      onBlur={() => saveQuestion(question)}
                                                      placeholder="Ecrivez la question" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Limite de temps</Form.Label>
                                        <Form.Control as="select" value={question.time || ''}
                                                      onBlur={() => saveQuestion(question)}
                                                      onChange={e => setQuestion(
                                                          {...question, time: parseInt(e.target.value)})}>
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
                                                      value={question.points || ''}
                                                      onBlur={() => saveQuestion(question)}
                                                      onChange={e => setQuestion(
                                                          {...question, points: parseInt(e.target.value)})}>
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

/*

{
            question: null,
            time: null,
            points: null,
            answer1:
                {
                    answer: null,
                    correct: false
                },
            answer2:
                {
                    answer: null,
                    correct: false
                },
            answer3:
                {
                    answer: null,
                    correct: false
                },
            answer4:
                {
                    answer: null,
                    correct: false
                }
            }
 */