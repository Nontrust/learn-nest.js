import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BoardStatus } from '../enums/boardStatus';
import { BoardType } from '../enums/board.enum.type';

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
