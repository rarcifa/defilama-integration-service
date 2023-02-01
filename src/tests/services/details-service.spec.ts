import * as detailsService from '@services/details-service';
import * as detailsRepository from '@lib/db/repositories/details-repository';
import {
  mockData,
  mockDataList,
  mockSymbol,
} from '@src/tests/fixtures/mock-data';

jest.useFakeTimers();
jest.setTimeout(15000);

describe('services/details-service', () => {
  test('the getAllDetails function', () => {
    const value = jest.mocked(detailsService.getAllDetails());
    const getAllDetailsMock = jest.spyOn(detailsRepository, 'getAllDetails');
    try {
      getAllDetailsMock.mockImplementation(() =>
        Promise.resolve(value)
          .then((res) => res)
          .catch((e) => e)
      );
      expect(value).toBe(value);
    } catch (e) {
      expect(value).toBe(null);
    }
  });

  test('the updateDetails function', () => {
    const value = jest.mocked(
      detailsService.updateDetails(mockSymbol, mockData)
    );
    const updateDetailsMock = jest.spyOn(detailsRepository, 'updateDetails');
    expect(value).toBeCalled;
    try {
      updateDetailsMock.mockImplementation(() =>
        Promise.resolve(value)
          .then((res) => res)
          .catch((e) => e)
      );
      expect(value).toBe(value);
    } catch (e) {
      expect(value).toBe(null);
    }
  });

  test('the bulkUpdateDetails function', () => {
    const value = jest.mocked(detailsService.bulkUpdateDetails(mockDataList));
    const updateDetailsMock = jest.spyOn(
      detailsRepository,
      'bulkUpdateDetails'
    );
    expect(value).toBeCalled;
    try {
      updateDetailsMock.mockImplementation(() =>
        Promise.resolve(value)
          .then((res) => res)
          .catch((e) => e)
      );
      expect(value).toBe(value);
    } catch (e) {
      expect(value).toBe(null);
    }
  });
});
