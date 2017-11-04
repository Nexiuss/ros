var bodyparser = require('body-parser');
var db = require('../DBHelper');

module.exports = {
	active: function(app){
		app.use(bodyparser.urlencoded({extended: false}));
		app.use(bodyparser.json());

		app.post('/orderFind', function(request, response){
			var sql = "select * from `order` where t_id='"+request.body.t_id+"' and status='"+request.body.status+"'";
			db.dataControl(sql, function(res){
				if(res.status == 'false'){
					response.send({status:2,msg: res.msg});
				}else {
					if(res.data.length > 0){
						response.send({status:1,data:JSON.parse(res.data[0].cr_data)});
					}else {
						response.send({status:0, msg: '数据库没数据！！'});
					}
				}
			});
		});
		app.post('/orderAll', function(request, response){
			var sql = "select * from `order`";
			db.dataControl(sql, function(res){
				if(res.status == 'false'){
					response.send({status:2,msg: res.msg});
				}else {
					if(res.data.length > 0){
						response.send({status:1,data:res});
					}else {
						response.send({status:0, msg: '数据库没数据！！'});
					}
				}
			});
		});
		// app.post('/orderUpdate', function(request, response){
		// 	var str = '';
		// 	for(var p in request.body){
		// 		if(p != 'id'){
		// 			str += `${p}='${request.body[p]}'`+' '
		// 		}
		// 	}
		// 	var sql = `update order set ${str} where id='${request.body.id}'`;
		// 	db.dataControl(sql, function(res){
		// 		if(res.status == 'false'){
		// 			response.send({status: 2,msg:result.msg});
		// 		}else {
		// 			response.send({status:0,msg:result.msg});
		// 		}
		// 	});
		// });
		app.post('/orderInsert', function(request, response){
			// var sql = `select * from 'order' where t_id= and 'status'=true`;
			var sql = "select * from `order` where t_id ='"+request.body.t_id+"' and `status`='true'"
			var obj = {}
			for(var key in request.body){
				if(key != 't_id'){
					obj[key] = request.body[key];
				}
			}
			db.dataControl(sql, function(res){
				if(res.status == false){
					response.send({status: 0, msg: res.msg});
				}else{
					if(res.data.length > 0){
						var arr = JSON.parse(res.data[0].cr_data);
						arr.push(obj);
						arr = JSON.stringify(arr);
						var sql = "update `order` set cr_data = '"+arr+"' where t_id='"+request.body.t_id+"'";
						db.dataControl(sql, function(res){
							if(res.status == false){
								response.send({status: 2,msg:res.msg});
							}else {
								response.send({status:0,msg:res.msg});
							}
						});
					}else{
						var ar = [];
						ar.push(obj);

						ar = JSON.stringify(ar)
						console.log(ar)

						var sql = "insert into `order` (cr_data, status, t_id, cr_date) values ('"+ar+"', 'true', '"+request.body.t_id+"', NOW())";
						db.dataControl(sql, function(res){response.send(res)});
					}
				}
			});	
		});
		app.post('/orderDel', function(request, response){
			var sql = "select * from `order` where t_id ='"+request.body.t_id+"' and `status`='true'"
			db.dataControl(sql, function(res){
				if(res.status == false){
					response.send({status: 0, msg: res.msg});
				}else{
					if(res.data.length > 0){
						var arr = JSON.parse(res.data[0].cr_data);
						for(var i=0; i<arr.length; i++){
							if(arr[i].id == request.body.id){
								arr.splice(i,1);
								arr = JSON.stringify(arr);
								var sql = "update `order` set cr_data = '"+arr+"' where t_id='"+request.body.t_id+"'";
								db.dataControl(sql, function(res){
									if(res.status == false){
										response.send({status: 2,msg:res.msg});
									}else {
										response.send({status:0,msg:res.msg});
									}
								});
								return;
							}
						}
						
					}
				}
			});
		});
		app.post('/pay', function(request, response){
			var sql = "update `order` set `status` = 'false' where t_id='"+request.body.t_id+"'";
			db.dataControl(sql, function(res){
				if(res.status == false){
					response.send({status: 2,msg:res.msg});
				}else {
					response.send({status:0,msg:res.msg});
				}
			});
		});
	}
}