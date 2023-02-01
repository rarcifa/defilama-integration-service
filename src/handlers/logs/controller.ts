import { Request, Response } from 'express';
import { SUCCESS } from '@config/constants';
import { HTTP_CODES } from '@lib/interfaces/status';
import * as producer from '@lib/rabbitmq/rabbitmq';

/**
 * @summary  calls createDetails service
 * @param  {Request} req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<Response>} - returned value
 */
export const createLog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const log: void = await producer.publishMessage(
      req.body.logType,
      req.body.message
    );
    return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: log });
  } catch (e) {
    return res
      .status(HTTP_CODES.SERVICE_UNAVAILABLE)
      .json({ error: e.message });
  }
};
