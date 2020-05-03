import React, {useState} from "react";
import QuizContext from '../Provider/QuizContext';


const QuizContextProvider = ({children}) => {
    const [selectedQuiz, setSelectedQuiz] = useState();

    return(
        <QuizContext.Provider value={{selectedQuiz, setSelectedQuiz}}>
            {children}
        </QuizContext.Provider>
    );
};

export default QuizContextProvider;