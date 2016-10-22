import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
	
	export const Clients = new Mongo.Collection('clients');
	export const Agencies = new Mongo.Collection('agencies');
});
