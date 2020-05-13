import React from "react";
import PropTypes from "prop-types";

function Answer({answer}) {
    return (
        <div style={{marginLeft: answer.depth + 'rem'}}>
            {answer.text}<br/>
        </div>
    );
}

Answer.propTypes = {
    answer: PropTypes.object.isRequired
};

export default Answer;