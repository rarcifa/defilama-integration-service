import { detailsRouter } from '@config/constants';
import * as Controller from '@handlers/details/controller';
import {
  authorizehRead,
  authorizehWrite,
} from '@lib/middlewares/auth.middleware';
import * as Validator from '@handlers/details/validator';
import { verifyErrors } from '@lib/middlewares/validation.middleware';

detailsRouter.get(
  '/details',
  authorizehRead,
  Validator.getAllDetails,
  verifyErrors,
  Controller.getAllDetails
);

detailsRouter.post(
  '/details',
  authorizehWrite,
  Validator.createDetails,
  verifyErrors,
  Controller.createDetails
);

export default detailsRouter;
