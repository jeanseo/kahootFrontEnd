import React, { Component } from "react";
import "./startGameTeacher.css";

class startGame extends Component {
    render() {
        return(
            <div>
                <div class="titleQ1">
                   <h1>
                        Question 1 : Qui est le plus beau ?
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

export default startGame;