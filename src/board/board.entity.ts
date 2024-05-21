import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '@app/src/board/enums/boardStatus';
import { BoardType } from '@app/src/board/enums/board.enum.type';
import { BoardInterface } from '@app/src/board/board.interface';
import { Board } from '@app/src/board/board.model';
import { CreateBoardDto } from '@app/src/board/dto/create-board.dto';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id?: string;

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

  private constructor({
    title,
    description,
    status,
    type,
    viewCount,
  }: BoardInterface) {
    super();
    this.title = title;
    this.description = description;
    this.status = status;
    this.type = type;
    this.viewCount = viewCount || 0;
  }
  public static of(
    title: string,
    description: string,
    status: BoardStatus,
    type: BoardType,
  ): BoardEntity {
    return new BoardEntity({ title, description, status, type });
  }

  public static fromModel(board: Board): BoardEntity {
    const { title, description, status, type } = board;
    return BoardEntity.of(title, description, status, type);
  }

  public static fromDto(dto: CreateBoardDto): BoardEntity {
    const { title, description, status, type } = dto;
    return BoardEntity.of(title, description, status, type);
  }
}
