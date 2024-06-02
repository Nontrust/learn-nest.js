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
import { BoardService } from '@src/board/board.service';
import { BoardStatus } from '@src/board/enums/board.status';
import { CreateBoardDto } from '@src/board/dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  async getBoard(@Param('id') id: number) {
    return this.boardService.findBoardById(id);
  }
  @Post()
  @HttpCode(201)
  setBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.insertBoard(dto);
  }

  @Patch('status/:id')
  async updateBoardStatus(
    @Param('id') id: number,
    @Body('status') status: BoardStatus,
  ) {
    return await this.boardService.updateBoardStatusById(id, status);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteBoard(@Param('id') id: number) {
    return await this.boardService.deleteBoardById(id);
  }
}
