import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'evidence.insert': function(evidence) {
        return Evidence.insert({
            id: evidence.id,
            name: evidence.name,
        });
    },

    'evidence.remove': function(evidence) {
        return Evidence.remove(evidence);
    },

    'evidence.update': function(evidence) {
        return Evidence.udpate();
    },
});

export const Evidence = new Mongo.Collection('evidence');