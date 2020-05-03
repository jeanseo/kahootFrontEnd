import React, {Component, useState, useContext, useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import QuestionList from "../molecules/QuestionList";
import CreateQuizForm from "../molecules/createQuizForm";
import CreateQuestionButton from "../atoms/CreateQuestionButton";
import QuizContext from "../Provider/QuizContext";
import {defaultQuestion} from "./Quiz";

const QuizEdit = (props) => {

    const {quiz, setQuiz} = useContext(QuizContext);
    const [selectedQuestion, setSelectedQuestion] = useState(0);

    const saveQuestion = async (question) => {
        let allQuestions = quiz.questions;
        allQuestions[selectedQuestion] = question;
        setQuiz({...quiz, questions: allQuestions});
        console.log(JSON.stringify(quiz));
        quiz.questions[selectedQuestion] = question;
    };

    const addQuestion = () => {
        console.log("on ajoute une question");
        let allQuestions = quiz.questions;
        allQuestions.push(defaultQuestion);
        setQuiz({...quiz, questions: allQuestions});
        setSelectedQuestion(allQuestions.length - 1)
    };

    return(
        <div>
            <form>
                <Form.Control plaintext type="text"
                              value={quiz.name || 'Nouveau Quiz'}
                              onChange={e => setQuiz(
                                  {...quiz, name: e.target.value })}
                              onBlur={() => console.log('sauvegarde à lancer')}
                              placeholder="Ecrivez la question" />
            </form>
            <div>
                <ul>
                    <QuestionList ChangeQuestion = {(questionId) => {
                        setSelectedQuestion(questionId);
                    }} questions={quiz.questions}/>
                </ul>
                <Button variant="success" onClick={() => addQuestion()}>
                    Ajouter une question
                </Button>
            </div>
            <div>
                <CreateQuizForm question={quiz.questions[selectedQuestion]} saveQuestion={saveQuestion}/>
            </div>
        </div>
    );

};

export default QuizEdit
