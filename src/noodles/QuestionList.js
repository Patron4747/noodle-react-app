import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {STORAGE_QUESTIONS_URL} from "../constants";

function QuestionList({showQuestionItem}) {

    const [questionList, setQuestionList] = React.useState([]);
    useEffect(() => {
        fetch(STORAGE_QUESTIONS_URL + "/getAllQuestions")
            .then(response => response.json())
            .then(response => {
                setQuestionList(response)
            })
    }, []);

    return (
        <div>
            <h1>QuestionList</h1>
            {questionList.map((question, index) => {
                return <span key={index}>
                    <button className={'question-list-button'}
                            onClick={() => showQuestionItem(question.id)}>
                        {question.title}
                    </button>
                    <br/>
                </span>
            })}
        </div>
    );
}

QuestionList.propTypes = {
    showQuestionItem: PropTypes.func.isRequired
};

export default QuestionList