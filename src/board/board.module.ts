import { Module } from '@nestjs/common';
import { BoardRepository } from '@app/src/board/board.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@config/core/logger/logger.module';
import { BoardController } from '@src/board/board.controller';
import { BoardService } from '@src/board/board.service';

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
