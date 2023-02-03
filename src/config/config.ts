import * as dotenv from 'dotenv';
import {
  BASE_ACCESS_URL,
  DEFAULT_ENV,
  HOST,
  IS_DEV_ENV,
  IS_PROD_ENV,
  MONGODB_DEFAULT,
  MONGODB_DEV,
  MONGODB_PROD,
  MONGODB_TEST,
  PORT,
} from '@config/constants';

dotenv.config();

export const config = {
  base: {
    protocol: 'http',
    host: HOST,
    port: PORT,
    accessUrl: BASE_ACCESS_URL,
  },
  service: {
    prod: IS_PROD_ENV,
    dev: IS_DEV_ENV,
    default: DEFAULT_ENV,
  },
  rabbitMQ: {
    url: 'amqp://localhost:5672',
    exchange: 'detailsExchange',
  },
  db: {
    prod: MONGODB_PROD,
    dev: MONGODB_DEV,
    test: MONGODB_TEST,
    default: MONGODB_DEFAULT,
  },
  cronJob: {
    schedule: '0 * * * *',
  },
};
