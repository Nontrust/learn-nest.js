import { BoardStatus } from './enums/boardStatus';
import { CreateBoardDto } from './dto/create-board.dto';
import { v4 as uuid } from 'uuid';
import { BoardType } from './enums/board.enum.type';
import { BoardInterface, IBoardBuilder } from '@app/src/board/board.interface';
import { BoardEntity } from '@app/src/board/board.entity';

export class Board {
  constructor(
    public readonly id: string,
    public title: string,
    public description?: string,
    public status: BoardStatus = BoardStatus.PUBLIC,
    public type: BoardType = BoardType.INFORMATION,
    public viewCount: number = 0,
  ) {}

  public static fromDto(dto: CreateBoardDto) {
    const { title, description, status, type } = dto;
    return Board.of(uuid(), title, description, status, type, 0);
  }

  public static fromEntity(entity: BoardEntity) {
    const { id, title, description, status, type, viewCount } = entity;
    return Board.of(id, title, description, status, type, viewCount);
  }

  public static of(
    id: string,
    title: string,
    description: string,
    status: BoardStatus,
    type: BoardType,
    viewCount: number,
  ): Board {
    return new BoardBuilder()
      .setId(id)
      .setTitle(title)
      .setDescription(description)
      .setStatus(status)
      .setType(type)
      .setViewCount(viewCount)
      .build();
  }
}

export class BoardBuilder implements IBoardBuilder, BoardInterface {
  id: string;
  title: string;
  description?: string;
  status: BoardStatus;
  type: BoardType;
  viewCount: number;

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  setId(id: string): this {
    this.id = id;
    return this;
  }

  setStatus(status: BoardStatus): this {
    this.status = status;
    return this;
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setType(type: BoardType): this {
    this.type = type;
    return this;
  }

  setViewCount(viewCount: number): this {
    this.viewCount = viewCount;
    return this;
  }

  build(): Board {
    return new Board(
      this.id,
      this.title,
      this.description,
      this.status,
      this.type,
      this.viewCount,
    );
  }
}
