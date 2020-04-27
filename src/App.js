import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Findquizz from './Components/atoms/search';
import DashedBox from './Components/atoms/dashedbox';


class App extends Component {
  render() {
    return (
      <div class="body">
      <Findquizz></Findquizz>
      <DashedBox></DashedBox>
    </div>
    );
  }
}

export default App;
