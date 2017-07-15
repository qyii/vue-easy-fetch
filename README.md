# vue-easy-fetch
An easy vue plugin get data from server by fetch

## install
``` javascript
npm install vue-easy-fetch --save
```
## usage
``` javascript 
Vue.easyfetch(url,options,cb)
```
* url : Request URL
* options : the data that you may translate by get
* you may write like this 
* {area : 'china' , keyword : 'javascript'}
* then this function will turn them into the url
* cb is callback

=============
``` javascript 

Vue.easyfetch('./url',{data:"p1",name:"qyii"},(data)=>{
	do sth...
})
```

## examples

