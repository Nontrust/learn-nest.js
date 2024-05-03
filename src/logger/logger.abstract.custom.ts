import { TransformableInfo } from 'logform';

export abstract class LoggerAbstractCustom {
  abstract LOGGER_FORMAT(info: TransformableInfo): string;
  abstract formatMessage(...data: any[]): string;

  abstract error(message: any, trace?: string): void;
  abstract warn(message: any): void;
  // log = info 로 사용예정
  abstract log(message: any): void;
  abstract info(message: any): void;

  abstract debug(message: any): void;
  abstract verbose(message: any): void;
}
