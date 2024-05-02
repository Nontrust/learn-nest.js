import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './enums/boardStatus';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getBoard(@Param('id') id: string) {
    return this.boardService.findBoardById(id);
  }
  @Post()
  @HttpCode(201)
  setBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.insertBoard(dto);
  }

  @Patch('status/:id')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardService.updateBoardStatusById(id, status);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteBoard(@Param('id') id: string) {
    return this.boardService.deleteBoardById(id);
  }
}
