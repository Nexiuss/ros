var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
var path = require('path');
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要



module.exports = {
	useToken: function(app){
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(bodyParser.json());
		// app.use(express.static(path.resolve(__dirname, '/')));
		app.post('/token', function(req, res){
			var token = req.body.token || req.query.token || req.headers['authorization'];
			if (token) {
				jwt.verify(token, 'smm', function(err, decoded) {
					if (err) {
						res.send({ success: false, message: err});
					} else {
						// 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
						// console.log('decoded', decoded);
						res.send({ success: true, data:decoded});
					}					
				})
			} else {
				res.send({ success: false, message: 'token出错！'});
			}
		});
	}
	

}