import { NextFunction, Request, Response } from 'express';
import {
  AUTHORIZATION_FAILED,
  CRONOS_DAPPS_READ_API_KEY,
  CRONOS_DAPPS_READ_API_SECRET,
  CRONOS_DAPPS_WRITE_API_KEY,
  CRONOS_DAPPS_WRITE_API_SECRET,
  EXPIRED_TOKEN,
  INVALID_API_KEY,
} from '@config/constants';
import { authenticateApiKey } from '@helpers/security';
import { HTTP_CODES } from '@lib/interfaces/status';

/**
 * @summary  checks for endpoint read rights
 * @param  {Request} req - request value
 * @param  {Response} res - response value
 * @param  {NextFunction} next - next function
 * @returns  {Promise<void | Response> } - returned value
 */
export const authorizehRead = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const apiKey: string = req.header('x-api-key') || CRONOS_DAPPS_READ_API_KEY;
    const isValidApiKey: boolean = authenticateApiKey(
      CRONOS_DAPPS_READ_API_SECRET,
      apiKey
    );

    if (!isValidApiKey) {
      return res
        .status(HTTP_CODES.UNAUTHORIZED)
        .json({ message: INVALID_API_KEY });
    }

    return next();
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      return res
        .status(HTTP_CODES.UNAUTHORIZED)
        .json({ message: EXPIRED_TOKEN });
    }

    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: AUTHORIZATION_FAILED });
  }
};

/**
 * @summary  checks for endpoint write rights
 * @param  {Request} req - request value
 * @param  {Response} res - response value
 * @param  {NextFunction} next - next function
 * @returns  {Promise<void | Response> } - returned value
 */
export const authorizehWrite = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    const apiKey: string =
      req.header('x-api-key') || CRONOS_DAPPS_WRITE_API_KEY;
    const isValidApiKey: boolean = authenticateApiKey(
      CRONOS_DAPPS_WRITE_API_SECRET,
      apiKey
    );

    if (!isValidApiKey) {
      return res
        .status(HTTP_CODES.UNAUTHORIZED)
        .json({ message: INVALID_API_KEY });
    }

    return next();
  } catch (e) {
    if (e.name === 'TokenExpiredError') {
      return res
        .status(HTTP_CODES.UNAUTHORIZED)
        .json({ message: EXPIRED_TOKEN });
    }

    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: AUTHORIZATION_FAILED });
  }
};
