import React, {Component} from "react";
import {useMutation, useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const ADD_QUESTION = gql`
        mutation{
            quizCreateOne(record:{
            name: "quiz vide 2"
        }) {
        recordId
        }
    }`;

const CreateQuiz = () => {

};

export default CreateQuiz;