import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { LoggerModule } from '../config/core/logger/logger.module';
import { BoardRepository } from '@app/src/board/board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BoardModule,
    LoggerModule,
    TypeOrmModule.forFeature([BoardRepository]),
  ],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository],
})
export class BoardModule {}
