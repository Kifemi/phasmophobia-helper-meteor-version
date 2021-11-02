import React, { useState, useEffect } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Ghosts } from '../../imports/collections/ghosts';
import { Evidence } from '../../imports/collections/evidence';

import EvidenceBox from "./evidence";
import GhostBox from "./ghost";
import Timer from "./timer";

import "../styles/main_window.css";

function MainWindow(props) {
    evidence = props[0]
    ghosts = props[1]

    const [selectedEvidence, setSelectedEvidence] = useState([]);
    const [selectedGhost, setSelectedGhost] = useState(0);
    const [possibleGhosts, setPossibleGhosts] = useState([]);
    const [possibleEvidence, setPossibleEvidence] = useState([]);
    
    useEffect(() => {
        setPossibleGhosts(ghosts)
    }, [ghosts])
    useEffect(() => {
        setPossibleEvidence(evidence)
    }, [evidence])
    useEffect(() => {
        setPossibleGhosts(checkPossibleGhosts());
    }, [selectedEvidence])
    useEffect(() => {
        setPossibleEvidence(checkPossibleEvidence());
    }, [possibleGhosts])

    const handleGhostSelection = function(ghost) {
        if(selectedGhost === ghost.id) {
            setSelectedGhost(0);
        } else {
            setSelectedGhost(ghost.id);
        }
    }

    const handleEvidenceSelection = function(evidenceId) {
        const index = selectedEvidence.indexOf(evidenceId);
        let arrayCopy = selectedEvidence.slice();
        if(index > -1) {
            arrayCopy.splice(index, 1);
        } else {
            arrayCopy.push(evidenceId);
        }
        setSelectedEvidence(arrayCopy);
        setSelectedGhost(0);
    }

    const checkPossibleGhosts = function() {
        let possibleGhostTemp = [];
        for(let i=0; i < ghosts.length; i++) {
            let isPossible = true;
            for(let j=0; j < selectedEvidence.length; j++) {
                if(!ghosts[i].evidences.includes(selectedEvidence[j])) {
                    isPossible = false;
                };
            };
            if(isPossible) {
                possibleGhostTemp.push(ghosts[i]);
            }
        }
        return possibleGhostTemp;
    }

    const checkPossibleEvidence = function() {
        let possibleEvidenceSet = new Set();
        possibleGhosts.forEach(ghost => ghost.evidences.forEach(evidence => possibleEvidenceSet.add(evidence)));     
        let possibleEvidenceTemp = []
        evidence.map(evidence => {
            if(possibleEvidenceSet.has(evidence.id)) {
                possibleEvidenceTemp.push(evidence);
            };
        });
        return possibleEvidenceTemp;
    };

    const handleClear = function() {
        setSelectedEvidence([]);
        setSelectedGhost(0);
    }

    return (
        <div className="container">
            <div className="row tools">
                <Timer />
                <button className="clearButton" onClick={handleClear}>Clear Evidence</button>
            </div>
            <div className="row evidenceList">
                {possibleEvidence.map(evidence => {
                    return <EvidenceBox key={evidence.id} evidence={evidence} selectedEvidence={selectedEvidence}
                        evidenceSelector={handleEvidenceSelection} ghostEvidence={ghosts[selectedGhost - 1]} />
                })}
            </div>
            <div className="row ghosts">
                {possibleGhosts.map(ghost => {
                    return <GhostBox key={ghost.id} ghost={ghost} selectedGhost={selectedGhost} 
                        ghostSelector={handleGhostSelection}/>
                })}
            </div>
        </div>
    );
};

export default withTracker(() => {
    Meteor.subscribe('ghostsAndEvidence');
    return [
        //{ evidence: Evidence.find({}, {sort: {id: 1}}).fetch() },
        //{ ghosts: Ghosts.find({}, {sort: {id: 1}}).fetch() },
        Evidence.find({}, {sort: {id: 1}}).fetch(),
        Ghosts.find({}, {sort: {id: 1}}).fetch()
    ];
})(MainWindow);