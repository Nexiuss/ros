var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ros',
    localAddress: '10.3.131.3'
});

// connection.connect();
module.exports = {
    dataControl: function(sql, callback){
        pool.getConnection(function(err, conn){
            if(err){
                callback({status: false, msg: '数据库链接失败！'});
            }else{
               conn.query(sql, function(err, res){
                   if(err){
                       callback({status: false, msg: '数据库操作失败！'});
                   }else{
                       callback({status: true, data: res, msg:'操作成功！！'});
                   }
                   conn.release();  
                      
               }); 
            }
        });
       
    }
}
// module.exports = {
//     insert:function(_tables,_data,_callback){
//          // {'name':'JR','age':20}
//         connection.query(`insert into ${_tables} set ?`,  _data ,function(err,result){
//             if(err){
//                 _callback({status:false})
//             }else{
                
//                 _callback({status:true});
//             }
//         })
//     },
//     select:function(_tables,_data,_callback){
//          // {'name':'JR'}
//         var sql;
//         for(var attr in _data){
//             // console.log(attr)
//             // console.log(_data[attr])
//             sql = `select * from ${_tables} where ${attr} = '${_data[attr]}'`;
//         }
//         connection.query(sql,function(err,result){
//             // if(err) throw err;
//             if(err){
//                 _callback({status:false});
//             }else {
//                 // console.log(true)
//                 console.log(result)
//                 _callback({status:true,data:result});
//             }
            
//         })
//     },
//     delete:function(_tables,_data,_callback){
//         // {'name':'JR'}
//         var sql;
//         for(var attr in _data){
//             sql = `delete from ${_tables} where ${attr} = '${_data[attr]}'`
            
//         }
//         connection.query(sql,function(err,result){
//             if(err) throw err;
//             _callback({status:true,data:result});
//         })
//     },
//     updata:function(_tables,_data,_callback){
//         // {where:{'name':'JR'},set:{'age':30}}
//         var sql;
//         for(var attr in _data.set){
//             sql = `update ${_tables} set ${attr} = '${_data.set[attr]}'`
//         }
//         for(var Attr in _data.where){
//             sql += `where ${Attr} = '${_data.where[Attr]}'`
//         }
//        connection.query(sql,function(err,result){
//             if(err) throw err;
//             _callback({status:true,data:result})
//        })
        
//     }
// }