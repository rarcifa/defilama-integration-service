import { waitSeconds } from '@helpers/common';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('helpers/common', () => {
  it('should wait for 1 second', () => {
    waitSeconds(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
