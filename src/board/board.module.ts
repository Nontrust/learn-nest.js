import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  imports: [BoardModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {

}
