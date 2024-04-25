import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];
  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoard(id: string): Board {
    return this.boards.find((board: Board) => board.id === id);
  }

  insertBoard(dto: CreateBoardDto): Board {
    const board = Board.ofDto(dto);
    this.boards.push(board);
    return board;
  }
}
