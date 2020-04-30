import React from "react";

const QuestionList = ({ questions }) => {


    if(questions.length===0)
        return <p>pas de questions</p>;
    return(
        <ul>
            {
                questions.map((questionItem, index) =>{
                    return <li key={`qi_${questionItem._id}`}>{questionItem.question}</li>
                    }
                )
            }
        </ul>
    );


};

export default QuestionList

