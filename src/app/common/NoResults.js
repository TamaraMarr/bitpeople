import React from 'react';
import './NoResults.css';

const NoResults = () => {
    return (
        <div>
            <h3 className="NoResults_info">No Results Match Your Query</h3>
            <br/>
            <i className="material-icons NoReults_icon">sentiment_neutral</i>
        </div>
    )
}

export default NoResults;