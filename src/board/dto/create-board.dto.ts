import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BoardStatus, BoardType } from '../enums/boardStatus';

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
