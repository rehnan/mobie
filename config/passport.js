var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;


//Método de serialização do usuário
passport.serializeUser(function(user, done) {
    sails.log.debug('serializeUser ######. ID: '+user.username);
    done(null, user.username);
});

passport.deserializeUser(function(uname, done) {
    sails.log.debug('deserializeUser ######. ID: ');
    User.findOne({username:uname}, function (err, user) {
        done(err, user);
    });
});


//Método Passaport
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },

    //Função Callback caso seja dado entrada do username e password do formulário
    function(username, password, done) {

        //Iniciar procura do usuário pelo método findOne
        User.findOne({username: username}, function (err, user) {

            //Verifica se houve algum erro de banco na busca
          if (err) { 
            sails.log.error(err);
            return done(err); 
          }

          //Verifica se há alguma ocorrência na coleção de usuários procurado
          if (!user) {
            sails.log.error('Username Incorreto!');
            return done(null, false, { message: 'Username Incorreto!' });
          }

          //Verifica se a senha do usuário encontrado é iguai a senha informada
          if (user.password != password) { 

            sails.log.error('User: '+user.password+ ' = '+password);
            return done(null, false, { message: 'Senha Incorreta!' }); 
          }

          sails.log.debug('End LocalStrategy');
          return done(null, user);
          
        });
    }
)); 




