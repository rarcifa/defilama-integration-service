import mongoose, { UpdateQuery, UpdateWriteOpResult } from 'mongoose';
import { IDetail } from '@lib/interfaces/details';
import * as detailsRepository from '@lib/db/repositories/details-repository';
import { logger } from '@src/helpers/logger';
import mongodb from 'mongodb';

/**
 * @summary  gets all aggregated dapps
 * @returns  {Promise<mongoose.Document[]>} - returned value
 */
export const getAllDetails = async (): Promise<IDetail[]> => {
  try {
    const details: IDetail[] = await detailsRepository.getAllDetails();
    return details;
  } catch (e) {
    logger.error(`[services/getAllDetails] - ${e.message}`);
    return null;
  }
};

/**
 * @summary  creates details
 * @param  {IDetail} data - body parameter
 * @returns  {Promise<mongoose.Document>} - returned value
 */
export const createDetails = async (
  data: IDetail
): Promise<mongoose.Document> => {
  try {
    const details: mongoose.Document = await detailsRepository.createDetails(
      data
    );
    return details;
  } catch (e) {
    logger.error(`[services/createDetails] - ${e.message}`);
    return null;
  }
};

/**
 * @summary  updates price stats by symbol
 * @param  {string} symbol - symbol parameter
 * @param  {UpdateQuery<IDetail>} data - body parameter
 * @returns  {Promise<mongoose.Document>} - returned value
 */
export const updateDetails = async (
  symbol: string,
  data: UpdateQuery<IDetail>
): Promise<mongoose.UpdateWriteOpResult> => {
  try {
    const details: UpdateWriteOpResult = await detailsRepository.updateDetails(
      symbol,
      data
    );
    return details;
  } catch (e) {
    logger.error(`[services/updateDetails] - ${e.message}`);
    return null;
  }
};

/**
 * @summary  updates price stats by symbol
 * @param  {IDetail} data - body parameter
 * @returns  {Promise<mongoose.Document>} - returned value
 */
export const bulkUpdateDetails = async (
  data: IDetail[]
): Promise<mongodb.BulkWriteResult> => {
  try {
    const details: mongodb.BulkWriteResult =
      await detailsRepository.bulkUpdateDetails(data);
    return details;
  } catch (e) {
    logger.error(`[services/bulkUpdateDetails] - ${e.message}`);
    return null;
  }
};
