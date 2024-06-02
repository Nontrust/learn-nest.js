import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BoardStatus } from '@src/board/enums/board.status';
import { BoardType } from '@src/board/enums/board.enum.type';

export class CreateBoardDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsEnum(BoardStatus)
  readonly status: BoardStatus;

  @IsEnum(BoardType)
  readonly type: BoardType;
}
