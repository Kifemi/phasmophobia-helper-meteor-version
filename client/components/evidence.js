import React from 'react';

import "../styles/evidence.css";

//function checkIfEvidenceIsSelected(selectedEvidence, id) {
//    return selectedEvidence.includes(id) ? true : false;
//}
//
function checkGhostSelection(evidenceList, id) {
    if(evidenceList) {
        return (evidenceList.includes(id) && !checkIfEvidenceIsSelected())
    }
}

function EvidenceBox(props) {
    const handleClick = function() {
        console.log("click Evidence")
    }
   //const checkIfEvidenceIsSelected = function() {
   //    if(props.selectedEvidence) {
   //        return props.selectedEvidence.includes(props.evidence.id) ? true : false;
   //    }  
   //}
   //${checkIfEvidenceIsSelected() ? "selectedEvidence" : ""} 
    const checkGhostSelection = function() {
        if(props.selectedEvidence) {
            console.log(props.selectedEvidence)
            return (props.selectedEvidence.includes(props.evidence.id)) ? true : false;
        }
    }

    return (
        <div className={`evidenceBox 
            ${checkGhostSelection() ? "evidenceForGhost" : ""} `}
            onClick={handleClick}>
            {props.evidence.name}
        </div>
    );
}

export default EvidenceBox;