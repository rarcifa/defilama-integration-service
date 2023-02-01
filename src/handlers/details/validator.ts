import { body, query, ValidationChain } from 'express-validator';

export const detailsBody: ValidationChain[] = [
  body('symbol', 'symbol should be a string')
    .optional({ checkFalsy: true })
    .isString(),
  body('address', 'address should be a string')
    .optional({ checkFalsy: true })
    .isString(),
  body('category', 'category should be a string')
    .optional({ checkFalsy: true })
    .isString(),
  body('tvl', 'tvl should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('change_1h', 'change_1h should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('change_1d', 'change_1d should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
  body('change_7d', 'change_7d should be a number')
    .optional({ checkFalsy: true })
    .isNumeric(),
];

export const logBody: ValidationChain[] = [
  body('logType', 'logType should be a string')
    .optional({ checkFalsy: true })
    .isString(),
  body('message', 'message should be a string')
    .optional({ checkFalsy: true })
    .isString(),
];

export const getAllDetails: ValidationChain[] = [
  query('query', 'query should be a string')
    .optional({ checkFalsy: true })
    .isString(),
];

export const createDetails: ValidationChain[] = detailsBody;
