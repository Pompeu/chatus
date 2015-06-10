Template.form.events({
	'submit #chat-form': function(evt){
		evt.preventDefault();
		var text = evt.target.text.value;
		console.log(text);
		Meteor.call('insertMessage', text, function(err, result){
			if(err){
				console.log(err);

			}else{
				console.log("message inserted with ID: ", result);
				evt.target.text.value ="";// to clean the text field after inserted the data on database
			}
		});
	}
});
