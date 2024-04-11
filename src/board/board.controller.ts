import { Controller, Get, Param } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(@Param('id') id: string) {
    return this.boardService.getBoard(id);
  }
}
