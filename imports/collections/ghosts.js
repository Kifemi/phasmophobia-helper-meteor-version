import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'ghost.insert': function(ghost) {
        return Ghosts.insert({
            id: ghost.id,
            name: ghost.name,
            evidence: ghost.evidence,
            str: ghost.str,
            weak: ghost.weak,
        });
    },

    'ghost.remove': function(ghost) {
        return Ghosts.remove(ghost);
    },

    'ghost.update': function(ghost) {
        return Ghosts.udpate();
    },
});

export const Ghosts = new Mongo.Collection('ghosts');