import React, {Component, useState, useContext} from "react";
import {Button, Form} from "react-bootstrap";
import QuestionList from "../molecules/QuestionList";
import CreateQuizForm from "../molecules/createQuizForm";
import CreateQuestionButton from "../atoms/CreateQuestionButton";
import QuizContext from "../Provider/QuizContext";
import {defaultQuestion} from "./Quiz";
import "./QuizEdit.css";
import {FormGroup, Input } from 'reactstrap';

const QuizEdit = (props) => {

    const {quiz, setQuiz} = useContext(QuizContext);
    const [selectedQuestion, setSelectedQuestion] = useState(0);

    const saveQuestion = async (question) => {
        let allQuestions = quiz.questions;
        allQuestions[selectedQuestion] = question;
        setQuiz({...quiz, questions: allQuestions});
    };

    const deleteQuestion = async (question) => {
        if(selectedQuestion > 0)
            setSelectedQuestion(selectedQuestion - 1);
        let allQuestions = quiz.questions;
        allQuestions.splice(selectedQuestion,1);
        setQuiz({...quiz, questions: allQuestions});
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
                <div class="questiontitle">
                    <Form>
                        <FormGroup>                          
                            <Input plaintext type="text" value={quiz.name || 'Nouveau Quiz'} onChange={e => setQuiz(
                                                    {...quiz, name: e.target.value })}
                                                onBlur={() => console.log('sauvegarde à lancer')}
                                                placeholder="Ecrivez la question"
                                                style={{fontSize: 40,textAlign:"center"}}
                            />
                        </FormGroup>
                    </Form>
                </div>
            <div class="leftmenu">
                <div class="ulliquestion">         
                    <ul>
                        <QuestionList ChangeQuestion = {(questionId) => {
                            setSelectedQuestion(questionId);
                        }} questions={quiz.questions}/>
                    </ul>
                </div>
                <div class="buttonaddquestion">
                        <Button variant="success" onClick={() => addQuestion()}>
                        +
                        </Button>
                </div>
            </div>
            <div>
                {quiz.questions.length > 0
                    ? <CreateQuizForm question={quiz.questions[selectedQuestion]}
                                      saveQuestion={saveQuestion}
                                      deleteQuestion = {deleteQuestion}/>
                    : <h2>Pas de questions</h2>      }
            </div>
        </div>
    );

};

export default QuizEdit
