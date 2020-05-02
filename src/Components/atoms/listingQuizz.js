import React from "react";
import { Card, CardText, CardTitle, Button } from 'reactstrap';
import "./listingQuizz.css";
import quizz from "../../quizz.png";
import { LinkContainer } from 'react-router-bootstrap'

const ListingQuizz0 = (props) => {
    return (
        <div>
            <div class="dashedbox">
                <div class="nbquizz">Vous n'avez aucun quizz</div>
            </div>
        </div>
    );
};
  
const ListingQuizz1 = (props) => {
    return (
        <div>   
            <div class="test">
            <Card>
                <div class="image">
                    <img src={quizz} style={{width:100, height:100, marginTop: 0}} />           
                </div>
                <div>
                    <div class="title">
                        <CardTitle>Quizz 1</CardTitle>
                    </div>
                    <div class="text">
                        <CardText class="text">Julien</CardText>
                    </div>
                    <div class="button">
                        <LinkContainer to="/pingame">
                            <Button class="button">Jouer</Button>
                        </LinkContainer>
                        <LinkContainer to="/updatequizz">
                            <Button class="button">Modifier</Button>
                        </LinkContainer>
                        <LinkContainer to="/deletequizz">
                            <Button class="button">Supprimer</Button>
                        </LinkContainer> 
                    </div>
                </div>
            </Card>
            </div>

            <div class="test">
            <Card>
                <div class="image">
                    <img src={quizz} style={{width:100, height:100, marginTop: 0}} />           
                </div>
                <div>
                    <div class="title">
                        <CardTitle>Quizz 2</CardTitle>
                    </div>
                    <div class="text">
                        <CardText class="text">Jean Sebastien</CardText>
                    </div>
                    <div class="button">
                        <LinkContainer to="/pingame">
                            <Button class="button">Jouer</Button>
                        </LinkContainer>
                        <LinkContainer to="/updatequizz">
                            <Button class="button">Modifier</Button>
                        </LinkContainer>
                        <LinkContainer to="/deletequizz">
                            <Button class="button">Supprimer</Button>
                        </LinkContainer> 
                    </div>
                </div>
            </Card>
            </div>

            <div class="test">
            <Card>
                <div class="image">
                    <img src={quizz} style={{width:100, height:100, marginTop: 0}} />           
                </div>
                <div>
                    <div class="title">
                        <CardTitle>Quizz 3 </CardTitle>
                    </div>
                    <div class="text">
                        <CardText class="text"> description..</CardText>
                    </div>
                    <div class="button">
                    <LinkContainer to="/pingame">
                        <Button class="button">Jouer</Button>
                    </LinkContainer>
                    <LinkContainer to="/updatequizz">
                        <Button class="button">Modifier</Button>
                    </LinkContainer>
                    <LinkContainer to="/deletequizz">
                        <Button class="button">Supprimer</Button>
                    </LinkContainer>  
                    </div>
                </div>
            </Card>
            </div>
        </div>

       
    );
  }

export default ListingQuizz1;
//export default ListingQuizz0;