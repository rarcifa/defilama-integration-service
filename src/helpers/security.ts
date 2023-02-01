import crypto, { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

/**
 * @summary  generates API key
 * @returns  {string} - returned value
 */
export const generateApiKey = (): string => {
  const buffer: Buffer = crypto.randomBytes(32);
  return buffer.toString('base64');
};

/**
 * @summary  generates API secret
 * @param  {crypto.BinaryLike} key - API key
 * @returns  {string} - returned value
 */
export const generateApiSecret = (key: crypto.BinaryLike): string => {
  const salt: string = randomBytes(8).toString('hex');
  const buffer: Buffer = scryptSync(key, salt, 64);
  return `${buffer.toString('hex')}.${salt}`;
};

/**
 * @summary  gauthenticates API key
 * @param  {crypto.BinaryLike} storedKey - secret key
 * @param  {crypto.BinaryLike} suppliedKey - API key
 * @returns  {boolean} - returned value
 */
export const authenticateApiKey = (
  storedKey: string,
  suppliedKey: crypto.BinaryLike
): boolean => {
  const [hashedKey, salt]: string[] = storedKey.split('.');
  const buffer: Buffer = scryptSync(suppliedKey, salt, 64);
  return timingSafeEqual(Buffer.from(hashedKey, 'hex'), buffer);
};
