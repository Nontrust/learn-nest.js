import { Module } from '@nestjs/common';
import { LoggerService } from '@config/core/logger/logger.service';

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
