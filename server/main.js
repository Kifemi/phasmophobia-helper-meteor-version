import { Meteor } from 'meteor/meteor';

import { Ghosts } from '../imports/collections/ghosts';

Meteor.startup(() => {
	// Check how many ghosts are in the collection
  	const numberOfGhosts = Ghosts.find({}).count();

	// If no ghosts in the collection, insert them there
	if(!numberOfGhosts) {
   	 	Ghosts.insert({
			id: 1, name: "Spirit", evidences: [1,3,6], Str: "nothing", Weak: "Smudge"
    	})
  	};

	Meteor.publish('ghosts', function() {
		// returns cursor, which is like a bookmark; not the actual data, but path to it
		return Ghosts.find({}, { limit: 20 });
	});
});
