var baseUrl = '';
var routerMode = 'history';


var baseImgPath = 'http://localhost:8082/public/imgs/';

if (process.env.NODE_ENV == 'development') {
	//baseUrl = 'http://cangdu.org:8001';
}else{
	baseUrl = 'http://localhost:82/';
}

export {
	baseUrl,
	baseImgPath
}
