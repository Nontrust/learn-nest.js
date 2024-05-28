import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '@app/src/board/enums/boardStatus';
import { BoardType } from '@app/src/board/enums/board.enum.type';
import { Board } from '@app/src/board/board.model';
import { CreateBoardDto } from '@app/src/board/dto/create-board.dto';
import { BoardInterface } from '@app/src/board/board.interface';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  status: BoardStatus;

  @Column()
  type: BoardType;

  @Column()
  viewCount?: number;

  constructor(title, description, status, type, viewCount) {
    super();
    this.title = title;
    this.description = description;
    this.status = status;
    this.type = type;
    this.viewCount = viewCount || 0;
  }
  public static of({
    title,
    description,
    status,
    type,
    viewCount,
  }: BoardInterface): BoardEntity {
    return new BoardEntity(title, description, status, type, viewCount);
  }

  public static fromModel(board: Board): BoardEntity {
    const { title, description, status, type } = board;
    return BoardEntity.of({ title, description, status, type });
  }

  public static fromDto(dto: CreateBoardDto): BoardEntity {
    const { title, description, status, type } = dto;
    return BoardEntity.of({ title, description, status, type });
  }
}
