import React, { Component } from "react";
import {updateQuiz} from "../../Requests";

const QuizContext = React.createContext();

class QuizProvider extends Component {
    // Context state
    state = {
        quiz: {},
    };

    // Method to update state
    setQuiz = quiz => {
        console.log('on va enregistrer le quiz');
        this.setState(prevState => ({ quiz : quiz }));
        updateQuiz(quiz)
            .catch((err) => console.log(err))
    };

    render() {
        const { children } = this.props;
        const { quiz } = this.state;
        const { setQuiz } = this;

        return (
            <QuizContext.Provider
                value={{
                    quiz,
                    setQuiz,
                }}
            >
                {children}
            </QuizContext.Provider>
        )
    }
}

export default QuizContext

export { QuizProvider }