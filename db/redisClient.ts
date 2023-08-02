import Redis from 'ioredis';

// 创建 Redis 客户端连接
const redisClient = new Redis({
  host: 'localhost',
  port: 6379,
  password: '12345678',
});

// 将 Redis 客户端的一些常用方法进行 Promise 化
export const redisGetAsync = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};

export const redisSetAsync = async (
  key: string,
  value: string
): Promise<'OK' | null> => {
  return await redisClient.set(key, value);
};

export const redisIncrAsync = async (key: string): Promise<number> => {
  return await redisClient.incr(key);
};
