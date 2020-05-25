import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {QUESTIONS_URL} from "../constants/url";
import QuestionItem from "./QuestionItem";

function QuestionList({showQuestionItem}) {

    const [questionList, setQuestionList] = React.useState([]);
    useEffect(() => {
        fetch(QUESTIONS_URL + "/getAllQuestions")
            .then(response => response.json())
            .then(response => {
                setQuestionList(response)
            })
    }, []);

    return (
        <div>
            {questionList.map((question, index) => {
                return <QuestionItem showQuestionItem={showQuestionItem} question={question}/>
            })}
        </div>
    );
}

QuestionList.propTypes = {
    showQuestionItem: PropTypes.func.isRequired
};

export default QuestionList