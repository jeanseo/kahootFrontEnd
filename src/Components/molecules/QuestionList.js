import React from "react";
import {Link} from "react-router-dom";

const QuestionList = ({ChangeQuestion , questions }) => {

    if(questions.length===0)
        return <ul></ul>;
    return(
        <ul>
            {
                questions.map((questionItem, index) =>{
                    return <li key={`qi_${index}`}
                               onClick={()=>ChangeQuestion(index)}>{questionItem.question}</li>
                    }
                )
            }
        </ul>
    );


};

export default QuestionList

