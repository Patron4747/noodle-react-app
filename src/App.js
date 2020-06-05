import React from 'react';
import QuestionList from "./components/QuestionList";
import AnswerList from "./components/AnswerList";
import NavBar from "./components/navbar/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./components/navbar/SignIn";

function App() {

    const [showQuestionList, setShowQuestionList] = React.useState(true);
    const [questionId, setQuestionId] = React.useState(null);

    function showQuestionItem(id) {
        setShowQuestionList(false);
        setQuestionId(id);
    }

    return (
        <BrowserRouter>
            <Switch>
                <div className='wrapper'>
                    <NavBar/>
                    <Route path="/sign-in" component={SignIn}/>
                    {showQuestionList && <QuestionList showQuestionItem={showQuestionItem}/>}
                    {!showQuestionList && <AnswerList questionId={questionId}/>}
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
