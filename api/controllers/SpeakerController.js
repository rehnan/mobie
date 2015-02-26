/**
 * SpeakerController
 *
 * @description :: Server-side logic for managing Speakeraccounts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var application = sails.config.globals;
module.exports = {

	index: function(req, res) {
		application.title = 'Dashboard';
		sails.log.debug('User: '+req.session.passport.user);
		Session.findOne({status:true, id_speaker:req.session.passport.user}).exec(function findOneCB(err, session_active){
  			if(err){return err};
  			//application.current_session = session_active;
  			
			if (!session_active) {
			   return req.session.current_session = null;
			}else
			sails.log.debug('Sessao: '+session_active.name);
			return req.session.current_session = session_active;
 		});
		
		
		res.view();
	},
};

