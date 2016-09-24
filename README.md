# Storage.js

本地存储Storage的封装，提供方便的API

## 下载

1. [Fork](https://github.com/chping2125/storage.js)到你的Git仓库，然后检出到你本地即可。
2. 点击这里，下载[ZIP压缩版](https://github.com/chping2125/storage.js/archive/master.zip).

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
1. type：指定Stroage的类型为sessionStorage/localStorage时出入“session”/"local",其他输入返回null。
2. key：只能为String类型，其他输入返回false。
3. value：传入null或undefined的时，返回null。