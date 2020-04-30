import React, { Component } from "react";

import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";



//const GET_QUIZ = gql``;



class Quiz extends Component {


    componentDidMount(){
        let id = this.props.match.params.id;
        if (!id){

            console.log("création d'un quiz");



            //Créer un nouveau quiz
            //récupérer son id
        }
        //Récupérer le quiz correspondant

        //Si pas trouvé de quiz, rediriger vers le listing des quizzes


        //On récupère l'id
        //S'il n'existe pas, on crée un quiz dans la bdd et on récupère l'Id

        // Une fois que l'on a un id, on récupère le quiz
    }
    render() {
        return (
            <div>
                <h2>{this.props.match.params.id}</h2>
            </div>
        );
    }
}

export default Quiz