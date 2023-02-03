import { getMockReq, getMockRes } from '@jest-mock/express';
import { healthCheck } from '@handlers/healthCheck/controller';
import { HTTP_CODES } from '@lib/interfaces/status';
import { SUCCESS } from '@config/constants';

describe('handlers/healthcheck', () => {
  const req = getMockReq();
  const { res } = getMockRes();

  it('should send a response with 200 Ok', async () => {
    await healthCheck(req, res);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: SUCCESS,
      })
    );
    expect(res.status).toHaveBeenLastCalledWith(HTTP_CODES.OK);
  });
});
