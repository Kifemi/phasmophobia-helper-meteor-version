import React from 'react';

import '../styles/ghost.css';

function checkIfGhostIsSelected(selectedGhost, id) {
    return (selectedGhost === id) ? true : false;
}

function GhostBox(props) {
    const handleGhostClick = function() {
        console.log("click Ghost")
        props.ghostSelector(props.ghost)
    };
    console.log("Ghost render")
    return (
        <div className={`ghostBox ${checkIfGhostIsSelected(props.selectedGhost, props.ghost.id) ? "selectedGhost" : ""} `} 
            onClick={handleGhostClick}>
            {props.ghost.name}
            <ul className="ghostInfo">
                <li>Str: {props.ghost.Str}</li>
                <li>Weak: {props.ghost.Weak}</li>
            </ul>
        </div>
    );
};

export default GhostBox;