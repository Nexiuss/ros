var express = require('express');
var path = require('path');
var manager = require('./managerRouter');
var order = require('./orderRouter');
var foods = require('./foodsRouter');
var token = require('./Token');
module.exports = {
	Manager: function(port){
		var app = express();
		app.all('*', function(request, response, next){
			response.header("Access-Control-Allow-Origin", "*");
			response.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
			response.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
			response.header("X-Powered-By",' 3.2.1');
			if(request.method=="OPTIONS") {
			  response.send(200);/*让options请求快速返回*/
			} else{
			  next();
			}
		});

		app.use(express.static(path.join(__dirname, '../')));
		manager.active(app);
		order.active(app);
		foods.active(app);
		token.useToken(app);
		app.listen(port);
	}
}