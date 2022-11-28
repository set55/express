import  *  as  winston  from  'winston';
import  'winston-daily-rotate-file';
import moment from 'moment';

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => `[${moment(info.timestamp).format('YYYY-MM-DD HH:mm:ss')}][${info.level}]:${info.message}`)
)

const transport = new winston.transports.DailyRotateFile({
    filename: './logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '2d',
    format: logFormat,
});

transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
});

const logger = winston.createLogger({
    transports: [
        transport,
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.align(),
                winston.format.printf(info => `[${moment(info.timestamp).format('YYYY-MM-DD HH:mm:ss')}][${info.level}]:${info.message}`)
            )
        })
    ]
});

export default logger

