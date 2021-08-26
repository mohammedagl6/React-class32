import React from 'react';


const Count = ({ count }) => {
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    return <p>{feedback}</p>
}

export default Count;