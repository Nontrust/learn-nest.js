import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.model';

import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './enums/boardStatus';
import { LoggerService } from '../config/core/logger/logger.service';
import { Log } from '../config/core/logger/logger.abstract';

@Injectable()
export class BoardService {
  private readonly logger: Log;
  constructor(logger: LoggerService) {
    this.logger = logger;
  }
  private boards: Board[] = [];
  getAllBoards(): Board[] {
    return this.boards;
  }

  findBoardById(id: string): Board {
    const board = this.boards.find((board: Board) => board.id === id);
    this.logger.info('board is', board);
    if (!board) {
      throw new NotFoundException(`Can\`t find board with id : '${id}'`);
    }
    return this.boards.find((board: Board) => board.id === id);
  }

  insertBoard(dto: CreateBoardDto): Board {
    const board = Board.ofDto(dto);
    this.boards.push(board);
    return board;
  }

  deleteBoardById(id: string) {
    const foundBoard = this.findBoardById(id);
    this.boards = this.boards.filter((board) => foundBoard.id !== board.id);
  }

  updateBoardStatusById(id: string, status: BoardStatus) {
    const foundBoard = this.findBoardById(id);
    foundBoard.status = status;

    return foundBoard;
  }
}
