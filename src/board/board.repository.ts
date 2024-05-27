import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BoardEntity } from '@app/src/board/board.entity';

@Injectable()
export class BoardRepository extends Repository<BoardEntity> {
  constructor(datasource: DataSource) {
    super(BoardEntity, datasource.createEntityManager());
  }
}
