Meteor.methods({
	//insert security the data on the mongodb 
	insertMessage: function(text) {
		if(!this.userId){
			throw new Meteor.Error("logged-out", "O usuário deve está logado para enviar e receber mensagens");
		}
		var user = Meteor.users.findOne(this.userId);
		Messages.insert({
			userId: this.userId,
			username: user.username,
			message: text,
			timestamp: Date.now()
		});
	}
});
Meteor.publish('messages', function(limit){
	if( this.userId ){
		return Messages.find({},{

			limit: limit || 5,
			sort: {
				timestamp: -1
			}
		
		});
	}
	this.ready();
});
