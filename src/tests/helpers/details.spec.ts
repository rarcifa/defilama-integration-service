import * as helper from '@helpers/details';
import * as defilamaService from '@integrations/defilama-service';

jest.useFakeTimers();
jest.setTimeout(15000);

describe('helpers/common', () => {
  test('calls the getDetailsAndParse function', async () => {
    const defalamaMock = await jest.mocked(defilamaService.getAllProtocols());
    const value = jest.mocked(helper.getDetailsAndParse());
    expect(value).toBeCalled;
    expect(defalamaMock).toBeCalled;
  });

  test('calls the bulkUpdateDetails function', async () => {
    const getDetailsAndParseMock = await jest.mocked(
      helper.getDetailsAndParse()
    );
    const value = jest.mocked(helper.bulkUpdateDetails());
    expect(value).toBeCalled;
    expect(getDetailsAndParseMock).toBeCalled;
  });
});
