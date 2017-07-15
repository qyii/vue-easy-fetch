// vue-easy-fetch.js

/*	
 *	used for get by fetch in vue
 *  version: 0.1.3
 *	2017/7/15
 *	authour : qyii
 *  license: MIT
 */


/* fetch requests(get)
 * url : Request URL
 * options : the data that you may translate by get
 * you may write like this 
 * {area : 'china' , keyword : 'javascript'}
 * then this function will turn them into the url
 * cb is callback
 * example:
 *  Vue.easyfetch('./url',{data:"p1",name:"qyii"},(data)=>{
 *	do sth...
 *  })
 */


export default{
	install: function (Vue, options) {
		Vue.easyfetch = easyfetch
		Vue.prototype.$easyfetch = easyfetch
	}
}

const vueasyFetch = {
  install: function (Vue, options) {
    Vue.easyfetch = easyfetch
    Vue.prototype.$easyfetch = easyfetch
  }
}

const easyfetch = function(url,options={},cb=(()=>{})){


	if (typeof options !== 'object') {
      throw new Error('[Vue.jsonp] Type of param "url" is not string.')
    }
	// turn options into query string
	if(options !== {}){
		let req = url + "?";
		for(var prop in options){
			req+=prop+"="+options[prop]+"&";
		}
	}
	// remove the last '&'
	req = req.replace(/&$/,"")
	// console.log(req)
	fetch(req,{
	    method: "get",
	    mode: 'cors',
	    cache:'default'
	}).then(function(response) {
		return response.text()
	}).then(function(body) {
		let resobj = JSON.parse(body);
		cb(resobj)
	})
}
