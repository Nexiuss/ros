var bodyparser = require('body-parser');

var db = require('../DBHelper');

module.exports = {
	active: function(app){
		app.use(bodyparser.urlencoded({extended: false}));
		app.use(bodyparser.json());

		app.post('/foodsFind', function(request, response){
			var sql = `select * from foods`;
			db.dataControl(sql, function(res){
				if(res.status == 'false'){
					response.send({status:2,msg: res.msg});
				}else {
					if(res.data.length > 0){
						response.send({status:1,data:res.data});
					}else {
						response.send({status:0, msg: '数据库没数据！！'});
					}
				}
			});
		});
		app.post('/foodsSelect', function(request, response){
			var sql = "select * from foods where id='"+request.body.id+"'";
			db.dataControl(sql, function(res){
				if(res.status == 'false'){
					response.send({status:2,msg: res.msg});
				}else {
					if(res.data.length > 0){
						response.send({status:1,data:res.data});
					}else {
						response.send({status:0, msg: '数据库没数据！！'});
					}
				}
			});
		});
		app.post('/foodsInsert', function(request, response){
			console.log(request.body)
			var sql = "select * from foods where food_name = '"+request.body.food_name+"'";
			db.dataControl(sql, function(result){
				if(result.status == false){
					response.send({status: 2,msg:result.msg});
				}else {
					if(result.data.length > 0){
						response.send({status:0,msg: '菜品已存在'});
					}else {		
						var sql = "insert into foods (img_url, price, food_name, type, sales, description, attr) values ('"+request.body.img_url+"', '"+request.body.price+"', '"+request.body.food_name+"', '"+request.body.type+"', '"+request.body.sales+"', '"+request.body.description+"', '"+request.body.attr+"')";
						db.dataControl(sql, function(res){
							console.log(res)
							if(res.status == 'false'){
								response.send({msg:res.msg});
							}else {
								response.send({status:1,msg:res.msg});
							}
						});
					}
				} 
			});
		});

		app.post('/foodsDel', function(request, response){
			var sql = "delete from foods where id = '"+request.body.id+"'";
			db.dataControl(sql, function(result){
				if(result.status == 'false'){
					response.send({status:2,msg: result.msg});
				}else{
					response.send({status:1, msg:result});
				}
			});
		});

		app.post('/foodsUpdate', function(request, response){
			// var str = '';
			// for(var p in request.body){
			// 	if(p != 'id'){
			// 		str += `${p}='${request.body[p]}'`+' '
			// 	}
			// }
			// var sql = `update order set ${str} where id='${request.body.id}'`;
			var sql = "update foods set food_name = '"+request.body.food_name+"', price='"+request.body.price+"', type='"+request.body.type+"', description='"+request.body.description+"', sales='"+request.body.sales+"', attr='"+request.body.attr+"' where id='"+request.body.id+"'";
			db.dataControl(sql, function(res){
				if(res.status == 'false'){
					response.send({status: 2,msg:res.msg});
				}else {
					response.send({status:0,msg:res.msg});
				}
			});
		});
	}
};