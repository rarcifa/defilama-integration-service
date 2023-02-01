import * as detailService from '@services/details-service';
import { Request, Response } from 'express';
import mongoose, { UpdateWriteOpResult } from 'mongoose';
import { IDetail } from '@lib/interfaces/details';
import { getAllProtocols } from '@integrations/defilama-service';
import { SUCCESS } from '@config/constants';
import { HTTP_CODES } from '@lib/interfaces/status';

/**
 * @summary  calls getAllDapps service
 * @param  {Request} _req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<Response>} - returned value
 */
export const getAllDetails = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const details: IDetail[] = await detailService.getAllDetails();
    return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: details });
  } catch (e) {
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: e.message });
  }
};

/**
 * @summary  calls createDetails service
 * @param  {Request} _req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<Response>} - returned value
 */
export const createDetails = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: IDetail = await getAllProtocols();
    const details: mongoose.Document = await detailService.createDetails(body);
    return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: details });
  } catch (e) {
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: e.message });
  }
};

/**
 * @summary  calls updatePriceStats service
 * @param  {Request} req - request object
 * @param  {Response} res - response object
 * @returns  {Promise<Response>} - returned value
 */
export const updatePriceStats = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const details: UpdateWriteOpResult = await detailService.updateDetails(
      req.params.symbol,
      req.body
    );
    return res.status(HTTP_CODES.OK).json({ status: SUCCESS, data: details });
  } catch (e) {
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ error: e.message });
  }
};
