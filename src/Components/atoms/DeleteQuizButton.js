import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {deleteQuiz} from "../../Requests";


const DeleteQuizButton = (props) => {

    return(
        <Button variant="danger" onClick={(e) => {
            e.preventDefault();


        }}>
            Créer un Quiz
        </Button>
    );
};s

export default DeleteQuizButton;