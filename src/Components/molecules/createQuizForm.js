import React, {Component, useEffect, useState} from "react";
import {
    Container,
    Row,
    Col, Form, Card, Button
} from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import ConfirmModal from "../atoms/ConfirmModal";
import {FormGroup, Input } from 'reactstrap';

const CreateQuizForm = ({question: questionToEdit, saveQuestion, deleteQuestion}) => {

    const [question, setQuestion] = useState(
        {
            _id : questionToEdit._id,
            question: questionToEdit.question,
            time: questionToEdit.time,
            points: questionToEdit.points,
            answers : questionToEdit.answers
        }
            );

    const [modalShow, setModalShow] = useState(false);

    const saveChanges = () =>{
        console.log('save changes');
        saveQuestion(question);
    };

    const updateAnswerChanged = index => e => {

        let newArr = question.answers;
        if  (e.target.type === 'text')
            newArr[index].answer = e.target.value;
        if  (e.target.type === 'checkbox')
            newArr[index].correct = e.target.checked;
        //TODO A bouger dans le backend
        if(newArr[index].answer !== null || newArr[index].answer !== '' )
            newArr[index].active = true;
        else
            newArr[index].active = false;
        setQuestion({...question, answers: newArr });
    };

    useEffect( () => {
        setQuestion({
            _id : questionToEdit._id,
            question: questionToEdit.question,
            time: questionToEdit.time,
            points: questionToEdit.points,
            answers: questionToEdit.answers
        });

    }, [questionToEdit]);

    return (
                <Container>
                    <Row>
                        <Col>
                            <Form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log("submit");

                                }}
                            >
                            <div class="menuright">
                                <Form>
                                    <FormGroup>
                                        <div class="questionright form-group">
                                            <Input plaintext type="text" class="form-control"
                                                                    value={question.question || ''}
                                                                    onChange={e => setQuestion(
                                                                        {...question, question: e.target.value }
                                                                    )}
                                                                    onBlur={() => saveQuestion(question)}
                                                                    placeholder="Ecrivez la question"
                                                                    style={{fontSize: 20}}
                                            />
                                        </div>                        
                                    </FormGroup>
                                </Form>
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
                                            <Card.Header as="h5"> </Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 1"
                                                              value={question.answers[0].answer || ''}
                                                              onChange={updateAnswerChanged(0)}
                                                />
                                            </Card.Title>
                                                <Form.Group>
                                                    <div class="pincouleur1">
                                                        <div class="othercontent1">
                                                            <Form.Check label="Bonne réponse"
                                                                    checked={question.answers[0].correct || false}
                                                                    onBlur={() => saveQuestion(question)}
                                                                    onChange={updateAnswerChanged(0)}/>
                                                        </div>
                                                    </div> 
                                                </Form.Group>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 2"
                                                              value={question.answers[1].answer || ''}
                                                              onBlur={() => saveQuestion(question)}
                                                              onChange={updateAnswerChanged(1)}
                                                />
                                            </Card.Title>
                                            <Form.Group>
                                            <div class="pincouleur2">
                                                <div class="othercontent2">
                                                    <Form.Check label="Bonne réponse"
                                                                checked={question.answers[1].correct || false}
                                                                onBlur={() => saveQuestion(question)}
                                                                onChange={updateAnswerChanged(1)}/>
                                                </div>
                                            </div>
                                            </Form.Group>
                                        </Card>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>
                                                <Form.Control plaintext type="text" placeholder="Réponse 3"
                                                              value={question.answers[2].answer || ''}
                                                              onBlur={() => saveQuestion(question)}
                                                              onChange={updateAnswerChanged(2)}
                                                />
                                            </Card.Title>
                                            <Form.Group>
                                                <div class="pincouleur3">
                                                    <div class="othercontent3">
                                                        <Form.Check label="Bonne réponse"
                                                                    checked={question.answers[2].correct || false}
                                                                    onBlur={() => saveQuestion(question)}
                                                                    onChange={updateAnswerChanged(2)}/>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header as="h5"></Card.Header>
                                            <Card.Title>            
                                                <Form.Control plaintext type="text" placeholder="Réponse 4"
                                                                value={question.answers[3].answer || ''}
                                                                onBlur={() => saveQuestion(question)}
                                                                onChange={updateAnswerChanged(3)}
                                                    />
                                                </Card.Title>
                                                <div>
                                                        <Form.Group>
                                                        <div class="pincouleur4">
                                                            <div class="othercontent4">
                                                                <Form.Check label="Bonne réponse"
                                                                                checked={question.answers[3].correct || false}
                                                                                onBlur={() => saveQuestion(question)}
                                                                                onChange={updateAnswerChanged(3)}/>
                                                            </div>
                                                        </div>
                                                        </Form.Group>
                                                </div>
                                            </Card>
                                    </Col>
                                </Form.Row>
                                <div class="buttondiv">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="danger" type="delete"
                                        onClick = {()=>setModalShow(true)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Form>
                        

                    </Col>
                 </Row>
                <ConfirmModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onConfirm={() => {
                        setModalShow(false);
                        deleteQuestion(question);
                    }}
                    headerText="Suppression"
                    bodyText={"Êtes-vous sûr de supprimer cette question?"}
                />
                </Container>
        );
};

export default CreateQuizForm;