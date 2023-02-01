import { logger } from '@src/helpers/logger';
import mongoose from 'mongoose';

/**
 * @summary  connects to MongoDB
 * @param  {string} uri - mongodb uri
 * @returns  {Promise<void>} - returned value
 */
export const mongooseConnect = async (uri: string): Promise<void> => {
  try {
    mongoose.connect(uri);
  } catch (e) {
    logger.info(`[lib/db/mongoose] - ${e.message}`);
    process.exit(1);
  }
};
