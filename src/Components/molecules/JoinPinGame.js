import React, { Component } from "react";
import "./JoinPinGame.css";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {joinGameRequest} from "../../Requests";
import GameContext from "../Provider/GameContext";
import Game from "../pages/Game";

function validate(pinId) {
    return {
      pinId: pinId.length === 0,
    };
  }
  
  class JoinPinGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pinId: this.props.pin || '',
          name: "",
        everFocusedPinId: false,
        inFocus: ""
      };
    }
  
    handlePinIdChange = evt => {
      this.setState({ pinId: evt.target.value });
    };

      handleNameChange = evt => {
          this.setState({ name: evt.target.value });
      };

    handleSubmit = evt => {
        evt.preventDefault();
      if (!this.canBeSubmitted()) {

        return;
      }
      //On va charger le game
        if(this.state.pinId.length>0 && this.state.name.length>0){
            const data = {
                pin: this.state.pinId,
                name: this.state.name
            };
            joinGameRequest(data).then((res)=>{
                this.props.setPlayer({name: this.state.name, id: res.playerId})
                this.context.setGame(res.game);}
            )
        }
    };
  
    canBeSubmitted() {
      const errors = validate(this.state.pinId);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      return !isDisabled;
    }
  
    render() {
      const errors = validate(this.state.pinId);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      return (
          
        <form onSubmit={this.handleSubmit}>
             <div className="enterpingame">
                <Label for="pingame">Veuillez rentrer le numéro de PIN  pour accéder à la partie : </Label>
            </div>
          <input
            className={errors.pinId ? "error" : ""}
            type="text"
            name="pin"
            placeholder="PIN de la partie"
            value={this.state.pinId}
            onChange={this.handlePinIdChange}
          />

        <input
            type="text"
            name="name"
            placeholder="Pseudo"
            value={this.state.name}
            onChange={this.handleNameChange}
        />

        <div className="submitenterpingame">
                <button disabled={isDisabled}>Rejoindre</button>
        </div>
        </form>
      );
    }
  }

JoinPinGame.contextType = GameContext;
export default JoinPinGame;