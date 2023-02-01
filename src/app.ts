import * as routes from '@routes/index';
import * as bodyParser from 'body-parser';
import express from 'express';
import { mongooseConnect } from '@lib/db/mongoose';
import { logger } from '@src/helpers/logger';
import { initCronJob } from '@helpers/cronJob';
import { config } from '@config/config';

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

/* routing setup */
routes.register(app);

/**
 * @summary  initiates app
 * @returns  {Promise<void>} - returned value
 */
export const onInit = async (): Promise<void> => {
  /* init cronjob */
  initCronJob(config.cronJob.schedule);

  try {
    await mongooseConnect(config.db.dev);
  } catch (e) {
    logger.info(`[src/app] - ${e.message}`);
    process.exit(0);
  }
};

export default app;
