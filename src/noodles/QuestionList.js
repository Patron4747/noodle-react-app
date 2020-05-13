import React from "react";
import PropTypes from "prop-types";

function QuestionList({showQuestionItem}) {

    const questionList = [
        {
            id: 1,
            title: 'В чем смысл жизни?'
        },
        {
            id: 2,
            title: 'Ситуация, которая перевернула вашу жизнь'
        },
        {
            id: 3,
            title: 'Что надо говорить на первом свидании?'
        },
        {
            id: 4,
            title: 'Что самое страшное вы видели в своей жизни?'
        },
        {
            id: 5,
            title: 'Что чувствует человек, переживший клиническую смерть?'
        }
    ];

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