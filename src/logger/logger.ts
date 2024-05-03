import { TransformableInfo } from 'logform';

export abstract class Log {
  abstract logger;

  abstract error(...data: any[]): void;
  abstract warn(...data: any[]): void;
  // log = info 로 사용예정
  abstract log(...data: any[]): void;
  abstract info(...data: any[]): void;

  abstract debug(...data: any[]): void;
  abstract verbose(...data: any[]): void;

  static LOGGER_FORMAT(info: TransformableInfo) {
    return `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`;
  }
}
