import React, { Component, useState } from "react";

import gql from "graphql-tag";
import {useMutation, useQuery} from "@apollo/react-hooks";
import QuestionList from "../molecules/QuestionList";
import CreateQuizForm from "../molecules/createQuizForm";
import { editQuiz } from "../../requests";



const GET_QUIZ = gql`query ($id : MongoID!),
{
  quizById(_id: $id){
    _id,
    name,
    owner,
    questions{
      _id,
      question,
      answers{
        answer,
        correct
      },
      points,
      time,
      order
    }
  }
}`;
/*
const UPDATE_QUIZ = gql`
     mutation (
    $id : MongoID!
    $name: String!
    $questions: [Questions]
    
  ) {
    quizUpdateById(
    record:{_id: "5e69554c2d1e5e77e8c080d2",
    
      name: $name
      Country: $Country
      Members: $Members
      Contact: $Contact
      Albums: $Albums
    )
    {_id}
`;*/

let quiz;

const Quiz = props => {

    const [selectedQuestion, setSelectedQuestion] = useState(0);

    let id = props.match.params.id;
    if (!id){
        //Rediriger vers listing quiz
    }
    //Récupérer le quiz correspondant
        const {data, loading, error } = useQuery(GET_QUIZ,{
            variables: { id : id }});

    const saveQuestion = async (question) => {
        let index = quiz.questions.findIndex(q => q._id === question._id);
        console.log("index :"+index);
        console.log("question: \n"+JSON.stringify(question));
        quiz.questions[index] = question;
        console.log(JSON.stringify(quiz));
        await editQuiz(quiz)
            .catch((err) => {console.log(err)});
    };

    //Si pas trouvé de quiz, rediriger vers le listing des quizzes


    //On récupère l'id
    //S'il n'existe pas, on crée un quiz dans la bdd et on récupère l'Id

    // Une fois que l'on a un id, on récupère le quiz

    if(loading){
        return(
            <h2>LOADING, PLEASE WAIT</h2>
        )
    }
    else if(error){
        console.log(error);
        return(
            <h2>ERROR</h2>
        )
    }
    else if(!data){
        return(
            <h2>NOT FOUND</h2>
        )
    }
    else{
        quiz = data.quizById;


        return (
            <div>
                <h2>{quiz.name}</h2>
                <div>
                    <ul>
                    <QuestionList ChangeQuestion = {(questionId) => {
                        setSelectedQuestion(questionId);
                    }} questions={quiz.questions}/>
                    </ul>
                </div>
                <div>
                    <CreateQuizForm question={quiz.questions[selectedQuestion]} saveQuestion={saveQuestion}/>
                </div>
            </div>
        )
    }
};

export default Quiz