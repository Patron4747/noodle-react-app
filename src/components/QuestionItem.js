import React from "react";
import PropTypes from "prop-types";

function QuestionItem({question, showQuestionItem}) {
    return (
        <div>
            <button className={'question-list-button'}
                    onClick={() => showQuestionItem(question.id)}>
                {question.title}
            </button>
            <br/>
        </div>
    )
}

QuestionItem.propTypes = {
    question: PropTypes.object.isRequired,
    showQuestionItem: PropTypes.func.isRequired
};

export default QuestionItem


