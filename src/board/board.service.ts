import { Injectable } from '@nestjs/common';
import { Board } from './board.model';
import { BoardStatus, BoardType } from './enums/boardStatus';

@Injectable()
export class BoardService {
  private boards: Board[] = [];
  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoard(id: string): Board {
    return this.boards.find((board: Board) => board.id === id);
  }

  setBoard(
    id: string,
    title: string,
    description: string,
    type: BoardType,
  ): Board {
    const board = Board.of(id, title, description, BoardStatus.PUBLIC, type, 0);
    this.boards.push(board);
    return board;
  }
}
