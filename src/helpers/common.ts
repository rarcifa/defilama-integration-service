/**
 * @summary  waits a specified number of seconds
 * @param  {number} s - seconds to wait
 * @returns  {Promise<void>} - returned value
 */
export const waitSeconds = (s: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};
