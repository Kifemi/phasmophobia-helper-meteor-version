import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Ghosts } from '../../imports/collections/ghosts';
import { Evidence } from '../../imports/collections/evidence';

import EvidenceBox from "./evidence";
import GhostBox from "./ghost";

import "../styles/main_window.css";

function getGhosts(list, id) {
    let ghost = list.find(ghost => ghost.id == id);
    if(ghost) {
        return ghost;
    } else {
        return { id: 0, name: "", evidences: [], Str: "", Weak: "" }
    }
}

function getEvidence(list, id) {
    let evidence = list.find(evidence => evidence.id == id);
    if(evidence) {
        return evidence;
    } else {
        return { id: 0, name: "" }
    }
}

function handleGhostSelection1(selectedGhost, ghost) {
    if(selectedGhost === ghost.id) {
        setSelectedGhost(0);
    } else {
        setSelectedGhost(ghost.id);
    }
}

function MainWindow(props) {
    evidence = props[0].evidence
    ghosts = props[1].ghosts

    const [selectedEvidence, setSelectedEvidence] = useState([]);
    const [selectedGhost, setSelectedGhost] = useState(0);
    const [possibleGhosts, setPossibleGhosts] = useState(ghosts)

    const handleGhostSelection = function(ghost) {
        if(selectedGhost === ghost.id) {
            setSelectedGhost(0);
            setSelectedEvidence([]);
        } else {
            setSelectedGhost(ghost.id);
            setSelectedEvidence(ghost.evidences);
        }
    }

    return (
        <div className="container">
            <div className="row evidenceList">
                {evidence.map(evidence => {
                    return <EvidenceBox key={evidence.id} evidence={evidence} selectedEvidence={selectedEvidence} />
                })}
            </div>
            <div className="row ghosts">
                {ghosts.map(ghost => {
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
        { evidence: Evidence.find({}).fetch() },
        { ghosts: Ghosts.find({}).fetch() },
    ];
})(MainWindow);