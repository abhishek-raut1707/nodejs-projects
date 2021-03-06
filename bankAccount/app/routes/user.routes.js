module.exports = (app) => 
{
	var users = require("../api/user.api.js");	

	app.post('/user', users.create);

	app.post('/user/login', passport.authenticate('local'), function(req, res){
		res.redirect('/user/info/'+ req.body.user_id);
	});

	app.get('/user/info/:user_id', users.info);

	app.get('/user/balance/:user_id', users.balance);

	app.put('/user/sendMoney/:user_id', users.sendMoney);
}