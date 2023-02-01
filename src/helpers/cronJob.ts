import nodeCron from 'node-cron';
import { bulkUpdateDetails } from '@helpers/details';

/**
 * @summary  initates hourly cronjob
 * @param  {string} schedule - schedule parameter
 * @returns  {nodeCron.ScheduledTask} - returned value
 */
export const initCronJob = (schedule: string): nodeCron.ScheduledTask => {
  return nodeCron.schedule(schedule, bulkUpdateDetails);
};
