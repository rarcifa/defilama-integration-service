import { NextFunction, Request, Response } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';
import { HTTP_CODES, VerificationErrorModel } from '@lib/interfaces/status';

/**
 * @summary  checks for express validator errors
 * @param  {Request} req - request value
 * @param  {Response} res - response value
 * @param  {NextFunction} next - next function
 * @returns  {void | Response} - returned value
 */
export const verifyErrors = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const errors: Result<ValidationError> = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: VerificationErrorModel[] = [];

  errors
    .array()
    .map((e: ValidationError) => extractedErrors.push({ [e.param]: e.msg }));

  return res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json({
    errors: extractedErrors,
  });
};
