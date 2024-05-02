import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.model';

import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './enums/boardStatus';

@Injectable()
export class BoardService {
  private boards: Board[] = [];
  getAllBoards(): Board[] {
    return this.boards;
  }

  findBoardById(id: string): Board {
    const board = this.boards.find((board: Board) => board.id === id);
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
