import React from 'react';
import QuestionList from "./noodles/QuestionList";
import QuestionItem from "./noodles/QuestionItem";

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
            {!showQuestionList && <QuestionItem questionId={questionId}/>}
        </div>
    );
}

export default App;
