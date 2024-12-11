
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import 'winston-daily-rotate-file';

export const winstonConfig = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.printf(({ timestamp, level, message }) => {
                    return `[${timestamp}] [${level}] ${message}`;
                })
            ),
        }),
        new winston.transports.File({
            filename: 'application.log',
            dirname: './logs',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
        }),
      
        new winston.transports.DailyRotateFile({
          filename: 'application-%DATE%.log',
          dirname: './logs',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
    ],
};
