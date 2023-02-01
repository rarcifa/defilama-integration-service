import { logRouter } from '@config/constants';
import * as Controller from '@handlers/logs/controller';
import { authorizehWrite } from '@lib/middlewares/auth.middleware';
import * as Validator from '@handlers/logs/validator';
import { verifyErrors } from '@lib/middlewares/validation.middleware';

logRouter.post(
  '/',
  authorizehWrite,
  Validator.createLog,
  verifyErrors,
  Controller.createLog
);

export default logRouter;
