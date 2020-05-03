import React, {Component} from "react";
import { useHistory } from 'react-router-dom';
import {useMutation} from '@apollo/react-hooks';
import gql from "graphql-tag";
import {Button} from "react-bootstrap";


const CREATE_QUIZ = gql`
        mutation{
  quizCreateOne(record:{
    name: "nouveau quiz",
    owner: "5ea0660a5257a64a008243e0",
    questions: [
    {
        question:"première question",
        time: 20,
        points: 1000,
        answers: [
            {active: false},
            {active: false},
            {active: false},
            {active: false},
        ]
        }
    ]
  }) {
    recordId
  }
  
}
        `
;
const CreateQuizButton = () => {
    const history = useHistory();
    const [createQuiz] = useMutation(CREATE_QUIZ);

    return(
        <Button variant="success" onClick={(e) => {
            e.preventDefault();
            console.log("submit");
            createQuiz({variables: {name: "question" }})
                .then((response)=>{
                        console.log('ajout effectué');
                        console.log(JSON.stringify(response.data.quizCreateOne.recordId));
                        history.push('/quiz/'+response.data.quizCreateOne.recordId);
                }
                )
                .catch((error)=>{
                    console.log('error');
                    console.log(error);
                })
        }}>
            Créer un Quiz
        </Button>
    );

};

export default CreateQuizButton;