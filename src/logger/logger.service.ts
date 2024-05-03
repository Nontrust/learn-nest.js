import { Injectable } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';

@Injectable()
export class LoggerService {
  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.printf(
          (info) => `${info.timestamp} [${info.level}]: ${info.message}`,
        ),
      ),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'application.log' }),
      ],
    });
  }
  private readonly logger: Logger;
  log = (...data: any[]): void => {
    const message = this.formatMessage(...data);
    this.logger.info(message);
  };

  error(...data: any[]): void {
    const message = this.formatMessage(...data);
    this.logger.error(message);
  }

  warn(...data: any[]): void {
    const message = this.formatMessage(...data);
    this.logger.warn(message);
  }

  debug(...data: any[]): void {
    const message = this.formatMessage(...data);
    this.logger.debug(message);
  }

  verbose(...data: any[]): void {
    const message = this.formatMessage(...data);
    this.logger.verbose(message);
  }

  info(...data: any[]): void {
    const message = this.formatMessage(...data);
    this.logger.info(message);
  }

  private formatMessage(...data: any[]): string {
    return data.map(this.stringifyItem).join(' ');
  }

  private stringifyItem(item: any): string {
    if (item === null || item === undefined) {
      return String(item);
    }

    if (typeof item === 'object') {
      try {
        return JSON.stringify(item);
      } catch (error) {
        return typeof item;
      }
    }
    return item.toString(); // 기본 타입의 경우 toString() 메서드 사용
  }
}
