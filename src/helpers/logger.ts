import winston, { createLogger, format, transports } from 'winston';
import { IS_PROD_ENV } from '@config/constants';

const enumerateErrorFormat: winston.Logform.FormatWrap = format(
  (info: winston.Logform.TransformableInfo) => {
    if (info instanceof Error) {
      Object.assign(info, { message: info.stack });
    }
    return info;
  }
);

export const logger: winston.Logger = createLogger({
  level: IS_PROD_ENV ? 'info' : 'debug',
  format: format.combine(
    enumerateErrorFormat(),
    IS_PROD_ENV ? format.colorize() : format.uncolorize(),
    format.splat(),
    format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new transports.Console({
      stderrLevels: ['error'],
    }),
  ],
});
