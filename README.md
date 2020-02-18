# egg-born-cache-redis

## Install

```bash
npm i egg-born-cache-redis
```

## Usage

```js
// app.js
module.exports = app => {
  app.cache.setDefault('redis');
};

// 获取cache_context实例
const cacheContext = app.cache;
```

## methods

### get(key:String)

### set(key:String, value:any, expireSeconds:Number = 0)

### del(key:string)
