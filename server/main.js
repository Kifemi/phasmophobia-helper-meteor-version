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
		Ghosts.insert({
			id: 2, name: "Wraith", evidences: [1,3,7], Str: "No footprints, Goes through walls", Weak: "Salt"
		});
		Ghosts.insert({
			id: 3, name: "Phantom", evidences: [3,5,7], Str: "Lowers sanity", Weak: "Photo"
		});
		Ghosts.insert({
			id: 4, name: "Poltergeist", evidences: [3,5,6], Str: "Throws stuff", Weak: "Empty rooms"
		});
		Ghosts.insert({
			id: 5, name: "Banshee", evidences: [2,5,7], Str: "Picks one target", Weak: "Crucifix"
		});
		Ghosts.insert({
			id: 6, name: "Jinn", evidences: [1,4,5], Str: "Longer distance -> faster", Weak: "Turn off power"
		});
		Ghosts.insert({
			id: 7, name: "Mare", evidences: [2,3,6], Str: "Darkness", Weak: "Lights"
		});
		Ghosts.insert({
			id: 8, name: "Revenant", evidences: [2,4,6], Str: "Fast boi", Weak: "Hide behind a palm tree"
		});
		Ghosts.insert({
			id: 9, name: "Shade", evidences: [1,4,6], Str: "Shy, hard to find", Weak: "Multiple players nearby"
		});
		Ghosts.insert({
			id: 10, name: "Demon", evidences: [4,5,6], Str: "Attacks often", Weak: "Ouija Board ANSWERS won't lower sanity"
		});
		Ghosts.insert({
			id: 11, name: "Yurei", evidences: [2,4,7], Str: "Drains sanity", Weak: "Smudging stops it from wandering around"
		});
		Ghosts.insert({
			id: 12, name: "Oni", evidences: [1,4,7], Str: "Active when near players", Weak: "Easier to find and identify"
		});
		Ghosts.insert({
			id: 13, name: "Goryo", evidences: [1,5,7], Str: "DOTS only through camera when no players around", Weak: "Doesn't wander far"
		});
		Ghosts.insert({
			id: 14, name: "Hantu", evidences: [2,4,5], Str: "Faster in low temperatures", Weak: "Slower in warmer areas"
		});
		Ghosts.insert({
			id: 15, name: "Myling", evidences: [1,5,6], Str: "Quieter footsteps", Weak: "Causes paranormal sounds often"
		});
		Ghosts.insert({
			id: 16, name: "Obake", evidences: [1,2,5], Str: "Rarely leaves traces from interactions", Weak: "Sometimes leaves unique evidence"
		});
		Ghosts.insert({
			id: 17, name: "Onryo", evidences: [2,3,4], Str: "Extinguishing a flame might cause a hunt", Weak: "Less likely to hunt when threatened"
		});
		Ghosts.insert({
			id: 18, name: "Raiju", evidences: [1,2,7], Str: "Faster near electrical devices", Weak: "Distrupts electronics"
		});
		Ghosts.insert({
			id: 19, name: "Twins", evidences: [1,3,4], Str: "Both twins can hunt", Weak: "Often two interactions at the same time"
		});
		Ghosts.insert({
			id: 20, name: "Yokai", evidences: [2,3,7], Str: "Talking near it may cause hunt", Weak: "Limited hearing during hunt"
		});
  	};

	if(!numberOfEvidence) {
		Evidence.insert({
			id: 1, name: "EMF Level 5"
		});
		Evidence.insert({
			id: 2, name: "Ghost Orb"
		});
		Evidence.insert({
			id: 3, name: "Spirit Box"
		});
		Evidence.insert({
			id: 4, name: "Freezing Temperatures"
		});
		Evidence.insert({
			id: 5, name: "Fingerprints"
		});
		Evidence.insert({
			id: 6, name: "Ghost Writing"
		});
		Evidence.insert({
			id: 7, name: "D.O.T.S Projector"
		});
	};

	Meteor.publish('ghostsAndEvidence', function() {
		// returns cursor, which is like a bookmark; not the actual data, but path to it
		return [
			Evidence.find({}, { limit: 20 }),
			Ghosts.find({}, { limit: 20 }),
		];
	});
});
