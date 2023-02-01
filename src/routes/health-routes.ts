import { authorizehRead } from '@lib/middlewares/auth.middleware';
import { healthRouter } from '@config/constants';
import * as HealthHandler from '@handlers/healthCheck/controller';
import { verifyErrors } from '@lib/middlewares/validation.middleware';

healthRouter.get('/', authorizehRead, verifyErrors, HealthHandler.healthCheck);

export default healthRouter;
