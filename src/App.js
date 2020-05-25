import React from 'react';
import QuestionList from "./components/QuestionList";
import AnswerList from "./components/AnswerList";

function App() {

    const [showQuestionList, setShowQuestionList] = React.useState(true);
    const [questionId, setQuestionId] = React.useState(null);

    function showQuestionItem(id) {
        setShowQuestionList(false);
        setQuestionId(id);
    }

    return (
        <div className='wrapper'>
            {showQuestionList && <QuestionList showQuestionItem={showQuestionItem}/>}
            {!showQuestionList && <AnswerList questionId={questionId}/>}
        </div>
    );
}

export default App;
