import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  default: {
    protocol: 'http',
    host: process.env.HOST,
    port: process.env.PORT || 3010,
    baseAccessUrl: process.env.BASE_ACCESS_URL || 'localhost:3010',
  },
  service: {
    prod: process.env.NODE_ENV === 'production',
    dev: process.env.NODE_ENV === 'development',
  },
  rabbitMQ: {
    url: 'amqp://localhost:5672',
    exchange: 'detailsExchange',
  },
  db: {
    prod: process.env.MONGODB_PROD,
    dev: process.env.MONGODB_DEV,
  },
  cronJob: {
    schedule: '0 * * * *',
  },
};
