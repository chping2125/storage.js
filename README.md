# Storage.js

[![GitHub issues](https://img.shields.io/github/issues/chping2125/storage.js.svg)](https://github.com/chping2125/storage.js/issues) [![GitHub forks](https://img.shields.io/github/forks/chping2125/storage.js.svg)](https://github.com/chping2125/storage.js/network) [![GitHub stars](https://img.shields.io/github/stars/chping2125/storage.js.svg)](https://github.com/chping2125/storage.js/stargazers) [![](https://img.shields.io/github/release/chping2125/storage.js.svg)](https://github.com/chping2125/storage.js/releases) [![](https://chping2125.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/storage.js_chping)


本地存储Storage的封装，提供方便的API

## 下载

### NPM

```
$ npm install storejs
```

### Git
+ [Fork](https://github.com/chping2125/storage.js)到你的Git仓库，然后检出到你本地即可。

### ZIP
+ 点击这里，下载[ZIP压缩版](https://github.com/chping2125/storage.js/archive/master.zip).

## 使用

```html
<script type="text/javascript" src="scripts/Storage.js"></script>
<script>
	storage('session','test','123');
</script>
```
or
```js
	var storage = require('Storage.js');
	storage.getOrSetStorage('session','test','123');
```

## 本地存储APIs
### storage(type,key,value)

```js
	/**
	 * 添加、修改、获取指定的Storage中的数据
	 * @param type[String](session/local)  指定要存储的Storage类型
	 * @param key[String]                  待添加、修改、获取的Storage的key值
	 * @param value[all Type]              待添加、修改的Storage的value值,缺省时为获取数据
	 * @return [Boolean/value]             type类型错误、添加、修改返回Boolean,获取返回value值或null
	 **/
	storage(type,key,value)

	eg:
		storage('session','test','123');
```
**说明**

1. type：指定Stroage的类型为sessionStorage/localStorage时出入“session”/"local",其他输入返回false。
2. key：只能为String类型，其他输入返回false。
3. value：传入null或undefined的时，返回null。

### storage(type).length
```js
	 /**
	 * 获取Storage中数据的容量
	 * @param type[String](session/local)  指定要获取容量的Storage类型
	 * @return [Number]                    返回容量大小
	 * */
	 storage(type).length
	eg:
		storage('session').length;
```

### storage.remove(type,key)
```js
	 /**
	 * 删除一个或清空Storage中的数据
	 * @param type[String](session/local)  指定要删除或者清空的Storage类型
	 * @param key[String]                  待删除的Storage的key值，缺省时为清空所有Storage
	 * @return [Boolean]
	 * */
	 storage.remove(type,key)
	eg:
		storage.remove('session','test');
```
**说明**

删除不会有任何提示，删除时请注意，或者你可以在原方法中添加你需要的返回信息。

### storage.set(type,obj)
```js
	 /**
	 * 添加多条数据到Storage
	 * @param type[String](session/local)  指定要添加的Storage类型
	 * @param obj[JSON格式]                待添加的JSON格式数据
	 * @return [Boolean]
	 * */
	 storage.set(type,obj)
	eg:
		storage.set('session',{"a",123,"b":true});
```
**说明**

+ obj必须为json格式的数据，如果仅想添加一条数据建议使用storage()方法。

### storage.get(type,obj)
```js
	 /**
	 * 获取多条数据
	 * @param type[String](session/local)  指定要获取的Storage类型
	 * @param obj[Array]                   待获取的数据名称数组
	 * @return [Object]                    返回JSON格式数组或者null
	 * */
	 storage.get(type,obj)
	eg:
		storage.get('session',["a","b"]);
```
**说明**

+ obj数组每一项必须为String类型的key。
+ obj也可以为String类型，表示获取单个Storage数据，功能同storage(type,key);

### storage.has(type,key)
```js
	 /**
	 * 判断指定Storage有无指定值
	 * @param type[String](session/local)  指定要获取的Storage类型
	 * @param key[String]                  待判断数据的key
	 * @return [Boolean]                    
	 * */
	 storage.has(type,obj)
	eg:
		storage.has('session','a');
```
