import React, {useEffect} from "react";
import PropTypes from "prop-types";
import AnswerItem from "./AnswerItem";
import axios from "axios";
import {QUESTIONS_URL} from "../constants/url";

function AnswerList({questionId}) {

    const [response, setResponse] = React.useState({question: null, answers: null});

    useEffect(() => {
        const fetchData = async () => {
            const questionResponse = await axios(QUESTIONS_URL + `/getQuestion?id=${questionId}`);
            const answersResponse = await axios(QUESTIONS_URL + `/${questionId}/getAnswersTree`);
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
                    return <AnswerItem answer={answer}/>
                })
            }
        </div>
    )
}

AnswerList.propTypes = {
    questionId: PropTypes.number.isRequired,
};

export default AnswerList