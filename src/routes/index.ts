import dappRoutes from '@routes/details-routes';
import healthRoutes from '@routes/health-routes';
import logRoutes from '@routes/log-routes';
import * as express from 'express';

/**
 * @summary  registers the routes for the service
 * @param  {express.Application} app - express application
 * @returns  {void} - returned value
 */
export const register = (app: express.Application): void => {
  app.get('/');
  app.use('(/api)?/v1/details-service', dappRoutes);
  app.use('/healthcheck', healthRoutes);
  app.use('/sendLog', logRoutes);
};
