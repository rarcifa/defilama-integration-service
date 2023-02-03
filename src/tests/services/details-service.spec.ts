import * as detailsService from '@services/details-service';
import {
  mockData,
  mockDataList,
  mockSymbol,
} from '@src/tests/fixtures/mock-data';

jest.useFakeTimers();
jest.setTimeout(15000);

describe('services/details-service', () => {
  test('calls the getAllDetails function', () => {
    const value = jest.mocked(detailsService.getAllDetails());
    expect(value).toBeCalled;
  });

  test('calls the updateDetails function', () => {
    const value = jest.mocked(
      detailsService.updateDetails(mockSymbol, mockData)
    );
    expect(value).toBeCalled;
  });

  test('calls the bulkUpdateDetails function', () => {
    const value = jest.mocked(detailsService.bulkUpdateDetails(mockDataList));
    expect(value).toBeCalled;
  });
});
