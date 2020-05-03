import React, {Component, useContext, useState} from "react";

import gql from "graphql-tag";
import {useMutation, useQuery} from "@apollo/react-hooks";
import QuizEdit from "./QuizEdit";
import QuizContext from "../Provider/QuizContext";
import QuizContextProvider from "../Provider/QuizContextProvider";
import {getQuiz} from "../../Requests";


class Quiz extends Component {

    constructor(props) {
        super (props);
        this.state = {
            quiz: null,
            loading: true
        }

    }

    componentDidMount() {
        getQuiz(this.props.match.params.id)
            .then((data) => {
                console.log('quiz chargé :\n'+JSON.stringify(data));
                this.setState({
                    quiz : data,
                    loading: false
                });
            });
    }


render(){
    if(this.state.loading)
        return(<h1>chargement</h1>);

    return(
        <QuizContext.Consumer>
            <div><h3>toto</h3></div>
        </QuizContext.Consumer>

    )

}
    }

export default Quiz;