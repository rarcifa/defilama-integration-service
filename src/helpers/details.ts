import { logger } from '@src/helpers/logger';
import * as detailService from '@src/services/details-service';
import { getAllProtocols } from '@src/integrations/defilama-service';
import { IDetail } from '@src/lib/interfaces/details';
import { CURRENT_DATE, FAILED, SUCCESS } from '@src/config/constants';
import mongodb from 'mongodb';

/**
 * @summary  gets details and parses data
 * @returns  {Promise<{ status: string, results: IDetail[] }>} - returned value
 */
export const getDetailsAndParse = async (): Promise<{
  status: string;
  results: IDetail[];
}> => {
  try {
    const body: IDetail = await getAllProtocols();
    const data: IDetail[] = JSON.parse(JSON.stringify(body));
    return { status: SUCCESS, results: data };
  } catch (e) {
    logger.error(`[helpers/getDetailsAndParse] - ${e.message}`);
    return { status: FAILED, results: null };
  }
};

/**
 * @summary  updates data through loop
 * @returns  {Promise<{ status: string, timeStamp: Date, operation: BulkWriteResult}>} - returned value
 */
export const bulkUpdateDetails = async (): Promise<{
  status: string;
  timeStamp: Date;
  result: mongodb.BulkWriteResult;
}> => {
  try {
    const body: {
      status: string;
      results: IDetail[];
    } = await getDetailsAndParse();
    const result: IDetail[] = body.results;
    const data: mongodb.BulkWriteResult = await detailService.bulkUpdateDetails(
      result
    );

    return { status: SUCCESS, timeStamp: CURRENT_DATE, result: data };
  } catch (e) {
    logger.error(`[helpers/updateDetails] - ${e.message}`);
    return { status: FAILED, timeStamp: CURRENT_DATE, result: null };
  }
};
