import { Request, Response } from 'express';
import { IHealthcheckResponse } from '@handlers/interfaces/healthCheckResponse';
import { MESSAGE_OK, SUCCESS } from '@config/constants';
import { HTTP_CODES } from '@lib/interfaces/status';

/**
 * @summary  checks the API health
 * @param  {Request} _req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<void>} - returned value
 */
export const healthCheck = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const healthcheck: IHealthcheckResponse = {
    uptime: process.uptime(),
    responsetime: process.hrtime(),
    message: MESSAGE_OK,
    timestamp: Date.now(),
  };
  try {
    return res
      .status(HTTP_CODES.OK)
      .json({ status: SUCCESS, data: healthcheck });
  } catch (e) {
    return res
      .status(HTTP_CODES.SERVICE_UNAVAILABLE)
      .json({ error: e.message });
  }
};
