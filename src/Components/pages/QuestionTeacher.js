import React, { Component } from "react";
import "./QuestionTeacher.css";

class QuestionTeacher extends Component {
    render() {
        return(
            <div>
                <div class="titleQ1">
                   <h1>
                        1 : Quelle est la réponse ?
                   </h1>                
                </div>
                <div class="pinresponse1">
                        <p class="pintextreponse"> 
                            Réponse 1
                        </p>
                        <div class="pincouleur1">
                        </div>
                </div>
                <div class="pinresponse2">
                    <p class="pintextreponse"> 
                        Réponse 2
                    </p>
                    <div class="pincouleur2">
                    </div>
                </div>
                <div class="pinresponse3">
                    <p class="pintextreponse"> 
                        Réponse 3
                    </p>
                    <div class="pincouleur3">
                    </div>
                </div>
                <div class="pinresponse4">
                    <p class="pintextreponse"> 
                        Réponse 4
                    </p>
                    <div class="pincouleur4">
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionTeacher;