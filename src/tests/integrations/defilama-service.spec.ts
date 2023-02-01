import * as defilamaService from '@integrations/defilama-service';

jest.useFakeTimers();
jest.setTimeout(15000);

describe('integrations/getAllProtocols', () => {
  test('the getAllProtocols function', async () => {
    const value = await jest.mocked(defilamaService.getAllProtocols());
    expect(value).toBeCalled;
  });
});
