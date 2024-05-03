import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [BoardModule, LoggerModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
