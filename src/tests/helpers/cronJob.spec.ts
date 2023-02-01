import { config } from '@config/config';
import { initCronJob } from '@helpers/cronJob';
jest.useFakeTimers();

describe('helpers/cronjob', () => {
  test('the schedule of cron job every hour', () => {
    initCronJob(config.cronJob.schedule);
    expect(config.cronJob.schedule).toBe('0 * * * *');
  });
});
