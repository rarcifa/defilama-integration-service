import { body, ValidationChain } from 'express-validator';

export const logBody: ValidationChain[] = [
  body('logType', 'logType should be a string')
    .optional({ checkFalsy: true })
    .isString(),
  body('message', 'message should be a string')
    .optional({ checkFalsy: true })
    .isString(),
];

export const createLog: ValidationChain[] = logBody;
