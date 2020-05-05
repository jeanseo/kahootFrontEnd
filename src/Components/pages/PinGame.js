import React, {Component, useContext} from "react";
import {Button, Row, Col, Table } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./PinGame.css";
import GameContext from "../Provider/GameContext";
   
const PinGame = (props) => {

    const {game, setGame} = useContext(GameContext);


        return (<div>
            <div class="all">
                <div class="quizzname">
                        {JSON.stringify(game)}
                </div>
                <div class="pinnumber">
                        <p class="pintext"> 
                            Code pin : {game.pin}
                        </p>
                </div>
                <div class="pin">
                    <h2>
                          Joueurs
                    </h2>
                <Table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>Julien</td>
                        <td>Jeanseb</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>Jaques</td>
                        <td>Jean-Pierre</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <div class="start" >
                <LinkContainer to="/startgameteacher">
                    <Button color="success">
                        START
                    </Button>
                </LinkContainer>
            </div>    
        </div>
            </div>
        );

}

export default PinGame;