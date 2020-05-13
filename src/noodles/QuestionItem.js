import React from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";

function QuestionItem({questionId}) {

    const questionItem = {
        id: questionId,
        title: "В чем смысл жизни?",
        answers: [
            {
                id: 4,
                text: "Его нет...",
                answers: [
                    {
                        id: 8,
                        text: "Как это его нет, еще как есть!"
                    },
                    {
                        id: 9,
                        text: "Согласен, он есть!"
                    }
                ]
            },
            {
                id: 5,
                text: "В том, чтоб написать как можно больше строчек кода"
            }
        ]
    };

    function walkTheAnswers(result, answers, depth) {
        answers.forEach(answer => {
            result.push({text: answer.text, depth});
            if (answer.answers) {
                walkTheAnswers(result, answer.answers, depth + 1);
            }
        });
        return result;
    }

    return (
        <div>
            <h1>{questionItem.title}</h1>
            {walkTheAnswers([], questionItem.answers, 0).map(answer => {
                return <Answer answer={answer}/>
            })}
        </div>
    )
}

QuestionItem.propTypes = {
    questionId: PropTypes.number.isRequired,
};

export default QuestionItem