import { getMockRes } from '@jest-mock/express';
import { createRequest } from 'node-mocks-http';
import {
  authorizehRead,
  authorizehWrite,
} from '@lib/middlewares/auth.middleware';
import { HTTP_CODES } from '@lib/interfaces/status';
import {
  INVALID_API_KEY,
  READ_API_KEY,
  WRITE_API_KEY,
  AUTHORIZATION_FAILED,
} from '@config/constants';

describe('lib/middleware', () => {
  const { res, next } = getMockRes();

  test('read with invalid key', async () => {
    try {
      const req = createRequest({ headers: { 'x-api-key': 'INVALID_KEY' } });
      await authorizehRead(req, res, next);
      expect(res.json).toBeCalledWith({ message: INVALID_API_KEY });
      expect(res.status).toBeCalledWith(HTTP_CODES.UNAUTHORIZED);
      return next();
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  });

  test('read with valid key', async () => {
    try {
      const req = createRequest({
        headers: { 'x-api-key': READ_API_KEY },
      });
      await authorizehRead(req, res, next);
      expect(next).toBeCalled();
      return next();
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  });

  test('write with invalid key', async () => {
    try {
      const req = createRequest({ headers: { 'x-api-key': 'INVALID_KEY' } });
      await authorizehWrite(req, res, next);
      expect(res.json).toBeCalledWith({ message: INVALID_API_KEY });
      expect(res.status).toBeCalledWith(HTTP_CODES.UNAUTHORIZED);
      return next();
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  });

  test('write with valid key', async () => {
    try {
      const req = createRequest({
        headers: { 'x-api-key': WRITE_API_KEY },
      });
      await authorizehWrite(req, res, next);
      expect(next).toBeCalled();
      return next();
    } catch (e) {
      return res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json({ message: AUTHORIZATION_FAILED });
    }
  });
});
