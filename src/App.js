import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Findquizz from './Components/atoms/search';
import listingQuizz from './Components/atoms/listingQuizz';


class App extends Component {
  render() {
    return (
      <div class="body">
      <Findquizz></Findquizz>
      <listingQuizz></listingQuizz>
    </div>
    );
  }
}

export default App;
