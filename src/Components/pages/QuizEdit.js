import React, {Component, useState, useContext, useEffect} from "react";
import Quiz from "./Quiz";
import {Form} from "react-bootstrap";
import QuestionList from "../molecules/QuestionList";
import CreateQuizForm from "../molecules/createQuizForm";
import CreateQuestionButton from "../atoms/CreateQuestionButton";
import QuizContext from "../Provider/QuizContext";

const QuizEdit = (props) => {

    //const quizContext = useContext(QuizContext);
    //console.log(quizContext);
    //console.log(quizContext);
    //quizContext.setSelectedQuiz(props.quizToEdit);
    //console.log(quizContext.selectedQuiz);


    //const [selectedQuestion, setSelectedQuestion] = useState(0);
    /*
    const saveQuestion = async (question) => {
        let index = quiz.questions.findIndex(q => q._id === question._id);
        console.log("index :"+index);
        console.log("question: \n"+JSON.stringify(question));
        quiz.questions[index] = question;
    };*/


    return(
                <div>
                    <h2>test</h2>
                </div>
    )
/*
    return(
        <QuizContext.Consumer>
        <div>
            <form>
                <Form.Control plaintext type="text"
                              value={quiz.name || 'Nouveau Quiz'}
                              onChange={e => setQuiz(
                                  {...quiz, name: e.target.value })}
                              onBlur={() => console.log('sauvegarde à lancer')}
                              placeholder="Ecrivez la question" />
            </form>
            <h2>{quiz.name}</h2>
            <div>
                <ul>
                    <QuestionList ChangeQuestion = {(questionId) => {
                        setSelectedQuestion(questionId);
                    }} questions={quiz.questions}/>
                </ul>
                <CreateQuestionButton quiz={quiz}/>
            </div>
            <div>
                <CreateQuizForm question={quiz.questions[selectedQuestion]} saveQuestion={saveQuestion}/>
            </div>
        </div>
        </QuizContext.Consumer>
    );
*/
};

export default QuizEdit
