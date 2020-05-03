import React, {Component, useContext, useState} from "react";
import QuizEdit from "./QuizEdit";
import QuizContext, {QuizProvider} from "../Provider/QuizContext";
import {getQuiz} from "../../Requests";

const defaultQuestion = {
    question: "nouvelle question",
    points: 1000,
    time: 20,
    answers: [
        {active: false},
        {active: false},
        {active: false},
        {active: false},
    ]
};

class Quiz extends Component {

    constructor(props) {
        super (props);
        this.state = {
            quiz: null,
            loading: true
        }

    }

    componentDidMount() {
        console.log(this.context)
        getQuiz(this.props.match.params.id)
            .then((data) => {
                console.log('quiz chargé :\n'+JSON.stringify(data));
                this.context.setQuiz(data);
                this.setState({
                    quiz: data,
                    loading: false
                });
            });
    }


render(){
    if(this.state.loading)
        return(<h1>Chargement...</h1>);

    return(

            <div>
                <QuizEdit/>
            </div>

    )
}
    }
Quiz.contextType = QuizContext;
export default Quiz;

export {defaultQuestion};