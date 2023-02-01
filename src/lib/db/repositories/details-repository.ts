import mongoose, { UpdateQuery } from 'mongoose';
import { IDetail } from '@lib/interfaces/details';
import { Detail } from '@lib/db/models/details-model';
import mongodb from 'mongodb';

/**
 * @summary  gets all aggregated dapps
 * @returns  {Promise<mongoose.Document[]>} - returned value
 */
export const getAllDetails = async (): Promise<IDetail[]> => {
  return await Detail.find({});
};

/**
 * @summary  creates details
 * @param  {IDetail} data - body parameter
 * @returns  {Promise<mongoose.Document>} - returned value
 */
export const createDetails = async (
  data: IDetail
): Promise<mongoose.Document> => {
  return await Detail.create(data);
};

/**
 * @summary  updates price stats by symbol
 * @param  {string} symbol - symbol parameter
 * @param  {UpdateQuery<IDetail>} data - body parameter
 * @returns  {Promise<mongoose.UpdateWriteOpResult>} - returned value
 */
export const updateDetails = async (
  symbol: string,
  data: UpdateQuery<IDetail>
): Promise<mongoose.UpdateWriteOpResult> => {
  return await Detail.updateMany({ symbol: symbol }, data, {
    upsert: true,
  });
};

/**
 * @summary  updates price stats by symbol
 * @param  {UpdateQuery<IDetail>} data - body parameter
 * @returns  {Promise<mongoose.BulkWriteResult>} - returned value
 */
export const bulkUpdateDetails = async (
  data: IDetail[]
): Promise<mongodb.BulkWriteResult> => {
  return await Detail.bulkWrite([
    {
      updateMany: {
        filter: { symbol: data.map((details: IDetail) => details.symbol) },
        update: { data },
        upsert: true,
      },
    },
  ]);
};
