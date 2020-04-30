import React, { Component, useState } from "react";

import gql from "graphql-tag";
import {useMutation, useQuery} from "@apollo/react-hooks";
import QuestionList from "../molecules/QuestionList";



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



const Quiz = props => {


    let id = props.match.params.id;
    if (!id){
        //Rediriger vers listing quiz
    }
    //Récupérer le quiz correspondant
    const {data, loading, error } = useQuery(GET_QUIZ,{
        variables: { id : id }});

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
        console.log(data);
        let quiz = data.quizById;

        return (
            <div>
                <h2>{quiz.name}</h2>
                <div>
                    <ul>
                    <QuestionList questions={quiz.questions}/>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Quiz