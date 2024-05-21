import { BoardStatus } from '@app/src/board/enums/boardStatus';
import { BoardType } from '@app/src/board/enums/board.enum.type';

export interface BoardInterface {
  id?: string;
  title: string;
  description?: string;
  status: BoardStatus;
  type: BoardType;
  viewCount?: number;
}

export interface IBoardBuilder {
  setId(id: string): this;
  setTitle(id: string): this;
  setDescription(id: string): this;
  setStatus(id: string): this;
  setType(id: string): this;
  setViewCount(viewCount: number): this;
}
