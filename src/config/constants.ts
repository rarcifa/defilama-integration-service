import crypto from 'crypto';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import express, { Router } from 'express';

dotenv.config();

// env
process.env.NODE_ENV = 'production';

// integrations
export const DEFILAMA_BASE_API: string = process.env.DEFILAMA_BASE_API;

// keys
export const READ_API_KEY: string =
  process.env.READ_API_KEY;
export const READ_API_SECRET: string =
  process.env.READ_API_SECRET;
export const WRITE_API_KEY: string =
  process.env.WRITE_API_KEY;
export const WRITE_API_SECRET: string =
  process.env.WRITE_API_SECRET;

// request status
export const SUCCESS: string = 'success';
export const FAILED: string = 'failed';
export const INVALID_API_KEY: string = 'Invalid API key';
export const EXPIRED_TOKEN: string = 'Expired token';
export const AUTHORIZATION_FAILED: string = 'Failed to authorize endpoint';
export const MESSAGE_OK: string = 'OK';

// service config
export const IS_PROD_ENV: boolean = process.env.NODE_ENV === 'production';
export const IS_DEV_ENV: boolean = process.env.NODE_ENV === 'development';

// utils
export const JWT_PAYLOAD: string = crypto.randomBytes(20).toString('hex');
export const IS_STRICT_QUERY: typeof mongoose = mongoose.set(
  'strictQuery',
  false
);
export const CURRENT_DATE: Date = new Date();

// jest config
export const JEST_TEST_API_KEY: string = process.env.JEST_TEST_API_KEY;
export const JEST_TEST_SECRET_KEY: string = process.env.JEST_TEST_SECRET_KEY;

// router
export const detailsRouter: Router = express.Router();
export const healthRouter: Router = express.Router();
export const logRouter: Router = express.Router();
