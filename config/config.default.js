'use strict';

module.exports = () => {
  return {
    redis: {
      client: {
        host: '127.0.0.1',
        port: 6379
      }
    },
    keys: 'cache_redis_20200218'
  };
};
