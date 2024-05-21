import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '@app/src/board/enums/boardStatus';
import { BoardType } from '@app/src/board/enums/board.enum.type';

@Entity()
export class BoardEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  status?: BoardStatus;

  @Column()
  type?: BoardType;

  @Column()
  viewCount?: number;
}
