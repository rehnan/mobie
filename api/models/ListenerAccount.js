var ListenerAccount = {
	schema: true,
  	adapter: 'MongodbServer',

  	attributes: {
  		nickname: {
  			type: 'string',
  		},

  		email: {
  			type: 'string',
  		},

  		tel: {
  			type: 'string'
  		}
  	}
};

module.exports = ListenerAccount;