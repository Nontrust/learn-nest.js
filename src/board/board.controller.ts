import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

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
  @Post()
  @HttpCode(201)
  setBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.insertBoard(dto);
  }
}
