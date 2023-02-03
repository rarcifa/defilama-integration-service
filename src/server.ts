import { logger } from '@src/helpers/logger';
import app, { onInit } from '@src/app';
import { config } from '@config/config';

app.listen(config.base.port, async (): Promise<void> => {
  try {
    await onInit();
    logger.info(`Service up && running on ${config.base.port}!`);
  } catch (e) {
    logger.info(`[src/server] - ${e.message}`);
    process.exit(0);
  }
});
