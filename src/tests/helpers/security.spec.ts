import { JEST_TEST_API_KEY, JEST_TEST_SECRET_KEY } from '@config/constants';
import {
  authenticateApiKey,
  generateApiKey,
  generateApiSecret,
} from '@helpers/security';

describe('generateApiKey', () => {
  it('tests generateApiKey function', () => {
    const value = generateApiKey();
    expect(value).toStrictEqual(value);
  });
});

describe('generateApiSecret', () => {
  it('tests generateApiSecret function', () => {
    const value = generateApiSecret(JEST_TEST_API_KEY);
    expect(value).toStrictEqual(value);
  });
});

describe('authenticateApiKey', () => {
  it('tests authenticateApiKey function', () => {
    const value = authenticateApiKey(JEST_TEST_SECRET_KEY, JEST_TEST_API_KEY);
    expect(value).toStrictEqual(value);
  });
});
