import winston from 'winston';
import { Loggly } from 'winston-loggly-bulk';
import chalk from 'chalk';

type LogType = 'log' | 'info' | 'warn' | 'error';

if (!process.env.VITEST && !process.env.CI)
    winston.add(
        new Loggly({
            token: process.env.LOGGLY_TOKEN!,
            subdomain: process.env.LOGGLY_SUBDOMAIN!,
            tags: ['justinfarrell'],
        })
    );

export const log = (level: LogType, message: string, ...meta: any[]) => {
    switch (level) {
        case 'error':
            console.error(chalk.red(message), ...meta);
            break;
        case 'warn':
            console.warn(chalk.yellow(message), ...meta);
            break;
        case 'info':
            console.info(chalk.gray(message), ...meta);
            break;
        case 'log':
            console.log(chalk.gray(message), ...meta);
            break;
        default:
            break;
    }
    if (process.env.VITEST || process.env.CI) {
        // Vitest is running - no logs necessary
        return;
    }
    winston.log(level, message, ...meta);
};
