import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Ghosts } from '../../imports/collections/ghosts';
import { Evidence } from '../../imports/collections/evidence';

import "../styles/main_window.css";

function getGhosts(props, id) {
    let ghost = props[0].ghosts.find(ghost => ghost.id == id);
    if(ghost) {
        return ghost;
    } else {
        return { id: 0, name: "", evidences: [], Str: "", Weak: "" }
    }
}

function getEvidence(props, id) {
    let evidence = props[1].evidence.find(evidence => evidence.id == id);
    if(evidence) {
        return evidence;
    } else {
        return { id: 0, name: "" }
    }
}

function MainWindow(props) {
    ghost = getGhosts(props, 1)
    evidence = getEvidence(props, 1)


    return (
        <div className="container">
            <div className="row evidence">
                {evidence.name}
            </div>
            <div className="row ghosts">
                {ghost.name}
            </div>
        </div>
    );
};

export default withTracker(() => {
    Meteor.subscribe('ghostsAndEvidence');

    return [
        { ghosts: Ghosts.find({}).fetch() },
        { evidence: Evidence.find({}).fetch() },
    ];
})(MainWindow);