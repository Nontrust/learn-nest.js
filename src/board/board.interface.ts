import { BoardStatus } from '@src/board/enums/board.status';
import { BoardType } from '@app/src/board/enums/board.enum.type';

export interface BoardInterface {
  id?: number;
  title: string;
  description?: string;
  status: BoardStatus;
  type: BoardType;
  viewCount?: number;
}

export interface IBoardBuilder {
  setId(id: number): this;
  setTitle(id: string): this;
  setDescription(id: string): this;
  setStatus(id: string): this;
  setType(id: string): this;
  setViewCount(viewCount: number): this;
}
