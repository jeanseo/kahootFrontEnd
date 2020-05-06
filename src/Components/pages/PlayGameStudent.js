import React, {Component, useContext, useState} from "react";
import GameContext from "../Provider/GameContext";
import QuestionStudent from "./QuestionStudent";

class PlayGameStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            gameStarted: false

        };
    }

    componentDidMount() {}

    render(){
        return(
            <div>
                <QuestionStudent/>
            </div>
        )
    }

}
PlayGameStudent.contextType = GameContext;
export default PlayGameStudent