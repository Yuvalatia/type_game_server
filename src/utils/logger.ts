import path from 'path';

import { createLogger, format, Logger, transports } from 'winston';

import config from '../config';

const { combine, timestamp, printf } = format;

const consoleLoggerFormat = printf(({ level, message, timestamp: ts }) => `[${ts}] ${level}: ${message}`);

const logger: Logger = createLogger({
  format: combine(
    format((info) => {
      info.level = info.level.toUpperCase();
      return info;
    })(),
    timestamp(),
    consoleLoggerFormat,
    format.colorize(),
  ),
  transports: [
    new transports.Console({ format: consoleLoggerFormat }),
    new transports.File({
      filename: path.join(config.LOGS_PATH, 'main.log'),
    }),
    new transports.File({
      filename: path.join(config.LOGS_PATH, 'error.log'),
      level: 'error',
    }),
    new transports.File({
      filename: path.join(config.LOGS_PATH, 'warning.log'),
      level: 'warn',
    }),
  ],
});

export default logger;

