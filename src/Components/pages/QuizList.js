import React, { Component } from "react";
import "./QuizList.css";
import QuizItem  from "../molecules/QuizItem";
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import {Button, Card, CardText, CardTitle} from "reactstrap";
import quizLogo from "../../quizz.png";
import {LinkContainer} from "react-router-bootstrap";


const GET_QUIZ_LIST = gql`
{
  quizMany{
    _id,
    name,
    owner,
    questions{
      _id
    }
  }
}`;

const QuizList = () => {

    const { data, loading, error } = useQuery(GET_QUIZ_LIST);

    if(loading){
        return(
        <div>loading</div>
        )
    }
    else if (error){
        return(
            <div>error</div>
        )
    }
    else {
        const quizzes = data.quizMany;
        console.log(data.quizMany);
        if(quizzes.length === 0){
            return (
                <div>
                    <div className="dashedbox">
                        <div className="nbquizz">Vous n'avez aucun quizz</div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    {
                       quizzes.map((quiz, index) => {
                       return <QuizItem key={`qi_${quiz._id}`} quiz={quiz}/>
                       })
                    }
                </div>
            )
        }
    }
};

export default QuizList;

