import React, {Component, useContext, useEffect, useState} from "react";
import "./QuizList.css";
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import {Button, Card, CardText, CardTitle} from "reactstrap";
import quizLogo from "../../quizz.png";
import {LinkContainer} from "react-router-bootstrap";
import {deleteQuiz} from "../../Requests";
import QuizItem from "../molecules/QuizItem";
import ConfirmModal from "../atoms/ConfirmModal";
import {Container} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import QuizContext from "../Provider/QuizContext";
import GameContext from "../Provider/GameContext";
import TopNavBar from "../molecules/topNavBar";

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
    const [quizzes, setQuizzes] = useState([]);
    const history = useHistory();

    const deleteQuizItem = (id) => {
        //Supression de la liste

        deleteQuiz(id).then(() => {
            let newList = quizzes;
            const index = newList.findIndex(x => x._id === id);
            newList.splice(index,1);
            setQuizzes(newList);
            history.push('/listingquizz');
        });
    };
    useEffect(() => {console.log('reload??')},[quizzes]);

    useEffect(() => {
        if(loading === false && data){
            setQuizzes(data.quizMany);
        }
    }, [loading, data]);

    if(loading){
        return(
            <div>
            <div>loading</div>
            </div>
        )
    }
    else if (error){
        return(
            <div>

            <div>error</div>
            </div>
        )
    }
    else {
        if(quizzes.length === 0){
            return (
                <div>
                    <div className="dashedbox">
                        <div className="nbquizz">Vous n'avez aucun quiz</div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                <div>
                    {
                        quizzes.map((quiz, index) => {
                            return <QuizItem key={index}
                                             quiz={quiz}
                                             deleteQuizItem={deleteQuizItem}

                            />
                        })
                    }

                </div>

                </div>
            )
        }
    }
};

export default QuizList;