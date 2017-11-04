import axios from 'axios'
var baseUrl = 'http://localhost:8082/'
var filterUrl = function(url){
	if(url.startsWith('http')){
		return url;
	}
	return baseUrl + url;
}

export default {
	// get: (opts) => new Promise((resolve, reject) => {
	// 	if(opts.vm){
	// 	  opts.vm[opts.loading || 'loadingShow'] = true;
	// 	}
	// 	axios.get(filterUrl(opts.url), opts.params).then(function(response){
	// 		if(opts.vm){
	// 			opts.vm[opts.loading || 'loadingShow'] = false;
	// 		}
	// 		resolve(response);
	// 	}).catch(function(error){
	// 		if(opts.vm){
	// 			opts.vm[opts.loading || 'loadingShow'] = false;
	// 		}			
	// 		reject(error);
	// 	})
	// }),
	post: (opts) => new Promise((resolve, reject) => {
	  if(opts.vm){
		opts.vm[opts.loading || 'loadingShow'] = true;
	  }
	  axios.post(filterUrl(opts.url), opts.params, {headers:{'Content-Type': 'application/json'}}).then(function(response){
		if(opts.vm){
			opts.vm[opts.loading || 'loadingShow'] = false;
		}
		resolve(response);
	  }).catch(function(error){
		if(opts.vm){
			opts.vm[opts.loading || 'loadingShow'] = false;
		}			
		reject(error);
	  })
	})
}
