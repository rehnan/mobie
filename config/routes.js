/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
    //ListenersAccountController
    'get /listeners/join': {
        controller: 'ListenerAccountController',
        action: 'index'
    },

    'get /listeners/hello': {
        controller: 'ListenerAccountController',
        action: 'sayHello'
    },

    //AuthController Routes:
   'get /': {
        controller: 'AuthController',
        action: 'root'
    },

   'get /auth/login':{
        controller: 'AuthController',
        action: 'login'
    },

    'post /auth/login':{
        controller: 'AuthController',
        action: 'passport_local'
    },

    'get /auth/logout':{
        controller: 'AuthController',
        action: 'logout'
    },

    'get /auth/signup':{
        controller: 'AuthController',
        action: 'signup'
    },

    'post /auth/signup':{
        controller: 'AuthController',
        action: 'create'
    },

    //SpeakerController Routes:
    'get /speaker/':{
        controller: 'SpeakerController',
        action: 'index'
    },




    //SpeakerController Routes:
    'get /speaker/session':{
        controller: 'SessionController',
        action: 'show'
    },

    'get /speaker/session/select/:id':{
        controller: 'SessionController',
        action: 'setSession'
    },

    'get /speaker/session/find/:id':{
        controller: 'SessionController',
        action: 'find'
    },

    'post /speaker/session/create':{
        controller: 'SessionController',
        action: 'new'
    },

    'get /speaker/session/create':{
        controller: 'SessionController',
        action: 'getCreateView'
    },

    'post /speaker/session/edit/:id':{
        controller: 'SessionController',
        action: 'update'
    },

    'get /speaker/session/edit/:id':{
        controller: 'SessionController',
        action: 'getEditView'
    },

    'get /speaker/session/delete/:id':{
        controller: 'SessionController',
        action: 'destroy'
    },


    //Rest to session quiz
    'get /speaker/quiz':{
        controller: 'QuizController',
        action: 'show'
    },

    //Rest to session doubts
    'get /speaker/doubts':{
        controller: 'DoubtsController',
        action: 'show'
    },

    //Rest to session polls
    'get /speaker/polls':{
        controller: 'PollsController',
        action: 'show'
    },

    //Rest to session quiz
    'get /speaker/listeners':{
        controller: 'ListenersController',
        action: 'show'
    }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
