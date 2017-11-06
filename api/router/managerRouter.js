var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyparser = require('body-parser');
var url = require('url');
var jwt = require('jsonwebtoken');
var db = require('../DBHelper.js');


module.exports = {
	active: function(app){
		app.use(bodyparser.urlencoded({extended: false}));
		app.use(bodyparser.json());
		app.use(cookieParser());
		app.use(session({
			name: 'ros',
			secret: 'rosSession',
			saveUninitialized: true,
			resave: false,
			cookie: {
				maxAge: 5000
			}
		}));
		app.post("/register", function(request, response){
			var sql = "select * from user where user_name = '"+request.body.user_name+"'";
			db.dataControl(sql, function(result){
				if(result.status == false){
					response.send({status: 2,msg:result.msg});
				}else {
					if(result.data.length > 0){
						response.send({status:0,msg: '用户已存在'});
					}else {
						// var sql = "insert into user (user_name, password, status) values ('"+request.body.user_name+"', '"+request.body.password+"', '"+request.body.status+"')";
						var sql = `insert into user (user_name, password, status) values ('${request.body.user_name}', '${request.body.password}', '${request.body.status}')`;
						db.dataControl(sql, function(res){
							if(result.status == false){
								response.send({msg:result.msg});
							}else {
								response.send({status:1,msg:result.msg});
							}
						});
					}
				} 
			});
		});
		app.post("/login", function(request, response){
			if(request.session.user){
				var user = request.session.user;
				var name = user.name;
				response.send('登录成功'+result);
			}else {
				var sql = `select * from user where user_name = '${request.body.user_name}' and password = '${request.body.password}'`;
				db.dataControl(sql, function(result){
					console.log(result)
					if(result.status == false){
						response.send({status: 2,msg:result.msg});
					}else {
						if(result.data.length > 0){
							request.session.regenerate(function(err){
								if(err){
									response.send({status: 0, message: err+' 登录失败'});
								}else {
									var user = {
										name: result.data[0].user_name,
										pow: result.data[0].status
									}
									request.session.user = user;
									var token = jwt.sign(user, 'smm', {
										'expiresIn': '10h' // 设置过期时间
									});
									// response.redirect('localhost/index.html?'+query.name);
									// response.send('登录成功'+result);
									response.send({status: 1,token: token, message:' 登录成功'});
								}
							})
						}else {
							response.send({status: 3, message: ' 登录失败,用户名或密码错误！'});
						}
					} 
				});
			}
		});
		app.post('/userUpdate', function(request, response){
			var sql = "update user set user_name = '"+request.body.user_name+"', password='"+request.body.password+"', status='"+request.body.status+"' where id='"+request.body.id+"'";
			db.dataControl(sql, function(res){
				if(res.status == false){
					response.send({status: 2,msg:res.msg});
				}else {
					response.send({status:0,msg:res.msg});
				}
			});
		});
		app.post('/userDel', function(request, response){
			var sql = "delete from user where id = '"+request.body.id+"'";
			db.dataControl(sql, function(result){
				if(result.status == 'false'){
					response.send({status:2,msg: result.msg});
				}else{
					response.send({status:1, msg:result});
				}
			});
		});
		app.post('/find', function(request, response){
			var sql = `select * from user`;
			db.dataControl(sql, function(result){
				if(result.status == false){
					response.send({status: 2,msg:result.msg});
				}else {
					if(result.data.length > 0){
						response.send({status:1,data:result.data});
					}else {
						response.send({status:0, msg: '数据库没数据！！'});
					}
				} 
			});
		});
	}
}