import { getMockReq, getMockRes } from '@jest-mock/express';
import {
  getAllDetails,
  updatePriceStats,
} from '@src/handlers/details/controller';
import { mongooseConnect, mongooseDisconnect } from '@src/lib/db/mongoose';
import * as detailsRepository from '@src/lib/db/repositories/details-repository';
import * as detailsService from '@src/services/details-service';
import { mockData } from '@src/tests/fixtures/mock-data';
import { Detail } from '@lib/db/models/details-model';
import { HTTP_CODES } from '@lib/interfaces/status';
import { SUCCESS } from '@src/config/constants';
import { config } from '@src/config/config';

jest.setTimeout(15000);

beforeAll(async () => {
  await mongooseConnect(config.db.test);
});

afterAll(async () => {
  await mongooseDisconnect();
});

describe('handlers/details', () => {
  const req = getMockReq();
  const { res } = getMockRes();

  beforeEach(async () => {
    await Detail.deleteMany({});
  });

  it('should call getAllDetails service and respond with 200 Ok', async () => {
    const service = jest.spyOn(detailsService, 'getAllDetails');
    await getAllDetails(req, res);
    expect(service).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: SUCCESS,
      })
    );
    expect(res.status).toHaveBeenLastCalledWith(HTTP_CODES.OK);
  });

  it('should call updateDetails service and respond with 200 Ok', async () => {
    const service = jest.spyOn(detailsService, 'updateDetails');
    await detailsRepository.createDetails(mockData);
    const req = getMockReq({
      params: { symbol: 'mock-symbol' },
      body: mockData,
    });
    await updatePriceStats(req, res);
    expect(service).toHaveBeenLastCalledWith('mock-symbol', mockData);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: SUCCESS,
      })
    );
    expect(res.status).toHaveBeenLastCalledWith(HTTP_CODES.OK);
  });
});
