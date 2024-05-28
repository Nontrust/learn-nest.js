import { Injectable, NotFoundException } from '@nestjs/common';

import { BoardRepository } from '@app/src/board/board.repository';
import { BoardEntity } from '@app/src/board/board.entity';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from '@app/src/config/core/logger/logger.service';
import { CreateBoardDto } from '@app/src/board/dto/create-board.dto';
import { BoardStatus } from '@app/src/board/enums/boardStatus';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private readonly boardRepository: BoardRepository,
    private readonly logger: LoggerService,
  ) {}
  // private boards: Board[] = [];
  async getAllBoards(): Promise<BoardEntity[]> {
    return this.boardRepository.find();
  }

  async findBoardById(id: number): Promise<BoardEntity> {
    const board = await this.boardRepository.find();
    this.logger.info('board is', board);
    if (!board) {
      throw new NotFoundException(`Can\`t find board with id : '${id}'`);
    }
    return board[0];
  }

  async insertBoard(dto: CreateBoardDto): Promise<InsertResult> {
    const board = BoardEntity.fromDto(dto);

    return await this.boardRepository.insert(board);
  }

  async deleteBoardById(id: number) {
    const foundBoard = await this.findBoardById(id);
    return this.boardRepository.remove(foundBoard);
  }

  async updateBoardStatusById(id: number, status: BoardStatus) {
    const foundBoard = await this.findBoardById(id);
    foundBoard.status = status;
    await this.boardRepository.update(id, foundBoard);

    return foundBoard;
  }
}
