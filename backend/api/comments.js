import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'
import { Meteor } from 'meteor/meteor'


const Comments = new Mongo.Collection('comments')


Meteor.methods({
	'reset_comments'(){Comments.remove({})},

	'insert.comment'({comment}){
		let docId;
		return Comments.insert({
			handle: Meteor.user().username, 
			userId: Meteor.userId(), 
			message: comment,
			createdAt: new Date()
		})
	},

	'update.comment' ({id, comment}){
		Comments.update(id, { $set: {message: comment}})
	}
})

if(Meteor.isServer){
	Meteor.publish('comments', ()=> {
		return Comments.find()
	})
}