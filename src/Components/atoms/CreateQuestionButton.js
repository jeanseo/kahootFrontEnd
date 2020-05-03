import React, {Component} from "react";
import { useHistory } from 'react-router-dom';
import {useMutation} from '@apollo/react-hooks';
import gql from "graphql-tag";
import {Button} from "react-bootstrap";


const UPDATE_QUIZ = gql`
    mutation(
    $id : MongoID!,
    $name: String!,
    $questions: [QuizQuestionsInput],
    
  ){
  quizUpdateById(record:{
    _id : $id,
    name: $name,
    owner: "5ea0660a5257a64a008243e0",
    questions: $questions
  }) {
    recordId
  }
  
}
`
;

const addQuestion = (quiz) => {

};

const CreateQuestionButton = ({quiz, setQuiz}) => {
    const [createQuestion] = useMutation(UPDATE_QUIZ);

    return(
        <Button variant="success" onClick={(e) => {
            createQuestion({variables: {id: quiz._id }})
                .then((response)=>{
                        console.log('ajout effectué');
                    }
                )
                .catch((error)=>{
                    console.log(error);
                })
        }}>
            Ajouter une question
        </Button>
    );

};

export default CreateQuestionButton;