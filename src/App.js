import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Findquizz from './Components/atoms/search';
import listingQuizz from './Components/pages/QuizList';


class App extends Component {
  constructor(props) {
    super(props);
  }

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
