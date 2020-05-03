import React, { Component } from "react";
import {Button, Row, Col, Table } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap'
import "./pinGame.css";
   
class pinGame extends Component {
    render() {
        return (
            <div class="all">
                <div class="quizzname">
                        Quizz 1 : test
                </div>
                <div class="pinnumber">
                        <p class="pintext"> 
                            Code pin : 123456
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
        );
    }
}

export default pinGame;