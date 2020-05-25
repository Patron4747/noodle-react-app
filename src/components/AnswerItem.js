import React from "react";
import PropTypes from "prop-types";

function AnswerItem({answer}) {
    return (
        <div style={{marginLeft: answer.depth + 'rem'}}>
            {answer.text}<br/>
        </div>
    );
}

AnswerItem.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerItem;