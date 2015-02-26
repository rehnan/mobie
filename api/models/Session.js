var Session = {

	  schema: true,
  	adapter: 'MongodbServer',
    

  	attributes: {

  	  key: {
          type: 'integer',
      },

      id_speaker: {
          type: 'email',
      },

      polls: {
          type: 'array',
          defaultsTo: function (){ return []; }
      },
	    
      id_listeners: {
          type: 'array',
          defaultsTo: function (){ return []; }
      },

      doubts: {
          type: 'array',
          defaultsTo: function (){ return []; }
      },

      polls: {
          type: 'array',
          defaultsTo: function (){ return []; }
      },

      quizes: {
          type: 'array',
          defaultsTo: function (){ return []; }
      },
    
      name: {
          type: 'string',
          required: true
      },

      status: {
          type: 'boolean',
          defaultsTo: function (){ return false; }
      },

      description: {
          type: 'text',
      },

      selected: {
          type: 'boolean',
          defaultsTo: function (){ return false; }
      }
  }/*,

  beforeCreate : function(item, cb){
        sails.log.debug("Antes de Criar #####");

      }*/
};

module.exports = Session;