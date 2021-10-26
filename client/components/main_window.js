import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Ghosts } from '../../imports/collections/ghosts';

function getGhosts(props, id) {
    let ghost = props.ghosts.find(ghost => ghost.id == id);
    if(ghost) {
        return ghost;
    } else {
        return { id: 0, name: "", evidences: [], Str: "", Weak: "" }
    }
}

function MainWindow(props) {
    ghost = getGhosts(props, 1)
    return (
        <div>
            <h1>Name: {ghost.name} </h1>
        </div>
    );
};

export default withTracker(() => {
    Meteor.subscribe('ghosts');

    return { ghosts: Ghosts.find({}).fetch() };
})(MainWindow);