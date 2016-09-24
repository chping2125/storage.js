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
	var storage = {},that=null;
	function serialize(value){
	  return JSON.stringify({"value":value});
	}
	function checkStorage(type){
	  that = this;
	  if(type === 'session'){
	  	return window.sessionStorage || null;
	  }else if(type === 'local'){
	  	return window.localStorage || null;
	  }else{
	    return  null;
	  }
	}
	function isJSON(obj) {
        return typeof obj === 'object' && Object.prototype.toString.call(obj).toLowerCase() =='[object object]' && !obj.length;
    }
    function isArray(obj){
    	return typeof obj === 'object' && Object.prototype.toString.call(obj).slice(8,-1) =='Array';
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
	  		if(arguments.length == 1&&storage != null){
	  			return storage;
	  		}
	    	return false;
	  	}
	}
	storage.prototype={
		set:function(type,obj){
			var storage = checkStorage(type);
			if(storage != null){
				if(isJSON(obj)){
					for(var att in obj){
						storage.setItem(att,serialize(obj[att]));
						//storage.getItem(att)? continue :this.set(type,obj);
					}
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		},
		get:function(type,obj){
			var storage = checkStorage(type);
			if(storage != null){
				if(isArray(obj)){
					var arr = [];
					obj.forEach(function(item){
						var newObj = {};
						newObj[item] = JSON.parse(storage.getItem(item)).value;
						arr.push(newObj);
					});
					return arr;
				}else{
					return null;
				}
			}else{
				return null;
			}
		},
		remove:function(type,key){
		  var storage = checkStorage(type);
		  if(storage != null){
		    if(key && typeof key === 'string'){
		      	var str = storage.getItem(key);
		      	if(str != null){
		          	storage.removeItem(key);
		          	return storage.getItem(key)?this.remove(type,key):true;
		      	}else{
		        	return true;
		      	}
		    }else{
          		storage.clear();
          		return storage.length == 0?true:this.remove(type,key);
		    }
		  }else{
		    return false;
		  }
		},
		length:this.length
	} 
	for (var a in storage.prototype) storage[a] = storage.prototype[a];
	return storage;
});