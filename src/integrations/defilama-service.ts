import { logger } from '@src/helpers/logger';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { DEFILAMA_BASE_API } from '@config/constants';
import { IDetail } from '@lib/interfaces/details';

export const defiLameInstancen: AxiosInstance = axios.create({
  baseURL: DEFILAMA_BASE_API,
});

/**
 * @summary  returns coingecko coins
 * @returns  {Promise<{ data: IDefiLamaResponse }>} - returned value
 */
export const getAllProtocols = async (): Promise<IDetail> => {
  const url = '/protocols';
  try {
    const coins: AxiosResponse<IDetail, string> =
      await defiLameInstancen.get<IDetail>(url);
    return coins.data;
  } catch (e) {
    logger.error(`[defilama/getAllProtocols] - ${e.message}`);
    return null;
  }
};
