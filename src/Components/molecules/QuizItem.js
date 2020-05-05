import React from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const QuizItem = (props) => {
    return (
        <Card>
            <Card.Body>{props.quiz.name}</Card.Body>
            <Card.Footer><ButtonGroup>
                <LinkContainer to={`/quiz/${props.quiz._id}`}>
                    <Button variant={"success"}>Start Game</Button>
                </LinkContainer>
                <LinkContainer to={`/quiz/${props.quiz._id}`}>
                    <Button>Edit</Button>
                </LinkContainer>
                <Button variant={"danger"}>Delete</Button></ButtonGroup></Card.Footer>
        </Card>
    )
};

export default QuizItem