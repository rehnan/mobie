/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
//var bcrypt = require('bcrypt');

var User = {

  schema: true,
  adapter: 'MongodbServer',

  attributes: {

    /*
      _id: {
         type: 'datetime',
         defaultsTo: function (){ return new Date(); }
      },
    */
      name: {
          type: 'string',
          required: true
      },
	    
      username: {
          type: 'string',
          required: true,
          unique: true
      },
    
      password: {
          type: 'string',
          required: true
      }
  },
  	/*
	    toJSON: function(){
	    	var obj = this.toObject();
	    	delete obj.password;
	    	return obj;
	    }
	

	
    beforeCreate: function(user, cb) {
    	bcrypt.genSalt(10, function(err, salt) {
    		bcrypt.hash(user.password, salt, function(err, hash) {
    			if(err) {
    				console.log(err);
    				cb(err);
    			}else{
    				user.password = hash;
    				cb(null, user);
    			}
    		});
    	});
  	}*/
};

module.exports = User;

/*
module.exports = {

schema: true,
attributes: {

  username: {
    type: 'string',
    required: true
  },
  pubs: {
    type: 'array',
    defaultsTo: []
  },
  ...-------------------------
   User.native(function (err, collection) {
      collection.update({username:aUsernameVariable},{$push:{pubs:aPubsVariable}}, function (err) {
    });
    -------------------------
        User.native(function (err, collection) {
      collection.update({id:anIdVariable},{$push:{pubs:aPubsVariable}}, function (err) {
    });

*/
