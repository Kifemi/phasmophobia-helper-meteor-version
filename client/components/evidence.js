import React from 'react';

import "../styles/evidence.css";

function EvidenceBox(props) {
    const handleClick = function() {
        props.evidenceSelector(props.evidence.id)
    }
    const checkIfEvidenceIsSelected = function() {
        if(props.selectedEvidence) {
            return props.selectedEvidence.includes(props.evidence.id) ? true : false;
        }  
    }
    const checkGhostSelection = function() {
        if(props.ghostEvidence) {
            return (props.ghostEvidence.evidences.includes(props.evidence.id)) ? true : false;
        }
    }
    return (
        <div className={`evidenceBox 
            ${checkIfEvidenceIsSelected() ? "selectedEvidence" : ""} 
            ${checkGhostSelection() ? "evidenceForGhost" : ""} `}
            onClick={handleClick}>
            {props.evidence.name}
        </div>
    );
}

export default EvidenceBox;