import { Meteor } from 'meteor/meteor';

import { Ghosts } from '../imports/collections/ghosts';
import { Evidence } from '../imports/collections/evidence';

Meteor.startup(() => {
	// Check how many ghosts are in the collection
  	const numberOfGhosts = Ghosts.find({}).count();
	const numberOfEvidence = Evidence.find({}).count()

	// If no ghosts in the collection, insert them there
	if(!numberOfGhosts) {
   	 	Ghosts.insert({
			id: 1, name: "Spirit", evidences: [1,3,6], Str: "nothing", Weak: "Smudge"
    	});
  	};

	if(!numberOfEvidence) {
		Evidence.insert({
			id: 1, name: "EMF Level 5"
		});
	};

	Meteor.publish('ghostsAndEvidence', function() {
		// returns cursor, which is like a bookmark; not the actual data, but path to it
		return [
			Ghosts.find({}, { limit: 20 }),
			Evidence.find({}, { limit: 20 }),
		];
	});
});
