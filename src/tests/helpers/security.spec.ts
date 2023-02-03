import {
  authenticateApiKey,
  generateApiKey,
  generateApiSecret,
} from '@helpers/security';

describe('helpers/security', () => {
  it('should generate an api Key, secret and then authenticate', () => {
    const key = generateApiKey();
    const secret = generateApiSecret(key);
    const result = authenticateApiKey(secret, key);
    expect(result).toBeTruthy();
  });
});
