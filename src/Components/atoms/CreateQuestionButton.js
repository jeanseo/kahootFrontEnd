import React, {Component, useContext} from "react";
import {Button} from "react-bootstrap";
import QuizContext from "../Provider/QuizContext";
import {defaultQuestion} from "../pages/Quiz";



const CreateQuestionButton = () => {

    const {quiz, setQuiz} = useContext(QuizContext);

    return(
        <Button variant="success" onClick={(e) => {
            console.log("on ajoute une question");
            let allQuestions = quiz.questions;
            allQuestions.push(defaultQuestion);
            setQuiz({...quiz, questions: allQuestions});
        }}>
            Ajouter une question
        </Button>
    );

};

export default CreateQuestionButton;