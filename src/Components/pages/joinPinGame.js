import React, { Component } from "react";
import "./joinPinGame.css";
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
/*class joinPinGame extends Component {
    render() {
        return (
            <div class="all">
                <div class="quizzname">
                        Rejoindre une partie avec un PIN : 
                </div>
                <div class="enterpingame">
                    <Form>
                        <FormGroup>
                            <Label for="pingame">Veuillez rentrer le numéro de PIN  pour accéder à la partie : </Label>
                            <div class="w-25 bg-warning inputpingame">
                          
                             <Input type="text" name="ping" id="pingame" placeholder="Numéro Pin de la partie" />
                            </div>
                        </FormGroup>
                    </Form>
                </div>
                <div class="submitenterpingame">
                    <LinkContainer to="/startgameuser">
                            <Button color="success">
                                Rejoindre
                            </Button>
                    </LinkContainer>
                </div>
            </div>
        );
    }
}*/
function validate(pinId) {
    return {
      pinId: pinId.length === 0,
    };
  }
  
  class joinPinGame extends React.Component {
    constructor() {
      super();
      this.state = {
        pinId: "",
        everFocusedPinId: false,
        inFocus: ""
      };
    }
  
    handlePinIdChange = evt => {
      this.setState({ pinId: evt.target.value });
    };

    handleSubmit = evt => {
      if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
      }
      const { pinId} = this.state;
      alert(`Vous rejoingez la partie suivante : ${pinId}. Bonne chance !`);
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
             <div class="enterpingame">
                <Label for="pingame">Veuillez rentrer le numéro de PIN  pour accéder à la partie : </Label>
            </div>
          <input
            className={errors.pinId ? "error" : ""}
            type="text"
            placeholder="PIN de la partie"
            value={this.state.pinId}
            onChange={this.handlePinIdChange}
          />

        <div class="submitenterpingame">
            <LinkContainer to="/startgameuser">
                <button disabled={isDisabled}>Rejoindre</button>
            </LinkContainer>
        </div>
        </form>
      );
    }
  }








export default joinPinGame;