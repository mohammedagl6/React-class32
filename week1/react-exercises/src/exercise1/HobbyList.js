import React from 'react';
import Hobby from './Hobby';

const HobbyList = () => {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return(
        <ul>
            { hobbies.map((hobby, index) => <Hobby hobby={hobby} key={index} />) }
        </ul>
    );
}


export default HobbyList;