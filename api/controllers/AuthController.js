/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var str2json = require('string-to-json');
var passport = require('passport');

module.exports = {

    //Get Route root: /
	root: function (req, res)
	{
        //Redirecionamento do diretório '/' pra página de login
		res.redirect('auth/login');
	},

    //Get Route login
	login: function (req,res)
    {
        //Verifica se há algum usuário logado para o redirecionamento correto
        if (req.session.passport.user) {
            return res.redirect('/speaker');
        }
        return res.view({layout: 'layout_login'});
    },

    //Action Logout
    logout: function (req,res)
    {
        //Logout do usuário
        //req.logout();
        req.session.destroy(function(err){
           // cannot access session here
         });
        res.redirect('/auth/login/');
        //return res.view('auth/login', {layout: 'layout_login', locals: {message: "Logout Efetuado!"}});
    },

    //Get Route Signup
    signup: function(req, res) {
        //Verifica se há algum usuário logado para o redirecionamento correto
        if (req.session.passport.user) {
            sails.console.log('Tem sessão');
            return res.redirect('/speaker');
        }
        return res.view({layout: 'layout_login'});
    },

    //Action Regiter new User
    create: function(req, res) {
        var username = req.param('username');
        //Verificar se há algum úsuário com o mesmo email



        User.findOne({username:username}, function (err, user) {
            if(err){return next(err);}
            sails.log.debug('Verificando se email já está cadastrado...');
            if(!user){
                //Cria o novo usuário informado
                sails.log.debug('Email não cadastrado...');
                User.create(req.params.all(), function (err, user) {
                    if (err){return next(err);}
                    sails.log.debug('O email foi cadastrado com sucesso!');

                    //Autentica Usuário e redireciona para a área speaker
                    req.login(user, function(err) {
                        if (err) { return next(err); }
                         sails.log.debug('Sessão criada! Redirecionando para Speaker Area');
                        return res.redirect('/speaker');
                    });
                });
            }else{
                res.locals.message = '';
                sails.log.debug('Fodeu! Achei um louco com o mesmo email...');
                return res.redirect('auth/signup');
            }
        });
    },

    //Action Authentication User
    passport_local: function(req, res)
    {
    	sails.log.debug('Entrou na action passport_local');
        passport.authenticate('local', function(err, user, info)
        {
        	//Se houver erro renderiza a view login com a mensagem de erro
        	if(err)
        	{
            	//res.view('auth/login', {message: info});
                //res.redirect('auth/login');
                //res.json(info);
                return res.view('auth/login', {layout: 'layout_login', locals: {message: info.message}});
            }

            //Se houver usuário inexistente renderiza a view login com a mensagem de erro
            if (!user)
            {
            	//res.view('auth/login', {message: info});
            	sails.log.error(user+' ########### User Error ########'+JSON.stringify(info));
               // res.view('auth/login', {layout: 'layout_login'});
                //res.json(info);
               // res.redirect('auth/login');
                return res.view('auth/login', {layout: 'layout_login', locals: {message: info.message}});
            }

            req.logIn(user, function(err) {
                    
                    sails.log.debug('########### Login Efetuado ######## '+user);
	                if (err)
	                {
	                    return res.view('auth/login', {layout: 'layout_login', locals: {message: info.message}});
	                }

	                
	                return res.redirect('/speaker');
            });
        })(req, res);
    }
};

