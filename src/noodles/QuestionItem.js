import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";
import axios from "axios";
import {STORAGE_QUESTIONS_URL} from "../constants";

function QuestionItem({questionId}) {

    const [response, setResponse] = React.useState({question: null, answers: null});

    useEffect(() => {
        const fetchData = async () => {
            const questionResponse = await axios(STORAGE_QUESTIONS_URL + `/getQuestion?id=${questionId}`);
            const answersResponse = await axios(STORAGE_QUESTIONS_URL + `/${questionId}/getAnswersTree`);
            setResponse({question: questionResponse.data, answers: answersResponse.data});
        };
        fetchData();
    }, [questionId]);

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
            {response.question && <h1>{response.question.title}</h1>}
            {response.answers && walkTheAnswers([], response.answers, 0)
                .map(answer => {
                    return <Answer answer={answer}/>
                })
            }
        </div>
    )
}

QuestionItem.propTypes = {
    questionId: PropTypes.number.isRequired,
};

export default QuestionItem