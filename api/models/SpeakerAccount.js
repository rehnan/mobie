/**
* SpeakerAccount.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

 var SpeakerAccount = {

  schema: true,
  adapter: 'MongodbServer',
  
  attributes: {

    id : { type: 'Integer' },

    name : { type: 'String' },

    email : { type: 'String' },

    password : { type: 'String' }
  }
};

module.exports = SpeakerAccount

