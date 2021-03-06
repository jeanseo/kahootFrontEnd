import React, {useContext} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import GameContext from "../Provider/GameContext";
import QuizContext from "../Provider/QuizContext";
import {useHistory} from "react-router-dom";

const QuizItem = (props) => {


    const {game, createGame} = useContext(GameContext);
    const history = useHistory();

    return (
        <Card>
            <Card.Body>{props.quiz.name}</Card.Body>
            <Card.Footer><ButtonGroup>
                    <Button variant={"success"}
                            onClick={async ()=>{
                                createGame(props.quiz._id).then((createdGame)=>{
                                    console.log(createdGame);
                                    history.push(`/gameteacher/${createdGame._id}`);
                                    //window.open(`/gameteacher/${createdGame._id}`, "_blank");
                                });
                            }}
                    >Start Game</Button>
                <LinkContainer to={`/quiz/${props.quiz._id}`}>
                    <Button>Edit</Button>
                </LinkContainer>
                <Button variant={"danger"}
                    onClick={()=>props.deleteQuizItem(props.quiz._id)}
                >Delete</Button></ButtonGroup></Card.Footer>
        </Card>
    )
};

export default QuizItem