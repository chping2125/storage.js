(function(fn) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = fn();
    } else if (typeof define === "function" && define.amd) {
        define([], fn);
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.storage = fn();
    }
})(function() {
	if (!window.localStorage) return;
	var storage = {};
	function serialize(value){
	  return JSON.stringify({"value":value});
	}
	function checkStorage(type){
	  if(type === 'session'){
	  	return window.sessionStorage || null;
	  }else if(type === 'local'){
	  	return window.localStorage || null;
	  }else{
	    return  null;
	  }
	}
	storage = function(type,key,value){
		var storage = checkStorage(type);
		if(storage != null&&typeof key === 'string'){
		    if(value != undefined){
		      	storage.setItem(key,serialize(value));
		      	return storage.getItem(key)?true:false;
		    }else{
		      	var obj = JSON.parse(storage.getItem(key));
		      	return obj?obj.value:null;
		    }
	  	}else{
	    	return false;
	  	}
	}
	storage.prototype={
		remove:function(type,key){
		  var storage = checkStorage(type);
		  if(storage != null){
		    if(key && typeof key === 'string'){
		      	var str = storage.getItem(key);
		      	if(str != null){
		          	storage.removeItem(key);
		          	return storage.getItem(key)?clearStorage(type,key):true;
		      	}else{
		        	return true;
		      	}
		    }else{
          		storage.clear();
          		return storage.length == 0?true:clearStorage(type,key);
		    }
		  }else{
		    return false;
		  }
		}	
	} 
	for (var a in storage.prototype) storage[a] = storage.prototype[a];
	return storage;
});