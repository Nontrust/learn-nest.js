import { BoardStatus, BoardType } from './enums/boardStatus';

export class Board {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description?: string,
    public readonly status?: BoardStatus,
    public readonly type?: BoardType,
    public readonly viewCount?: number,
  ) {}

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

interface IBoardBuilder {
  setId(id: string): this;
  setTitle(id: string): this;
  setDescription(id: string): this;
  setStatus(id: string): this;
  setType(id: string): this;
  setViewCount(viewCount: number): this;
}

export class BoardBuilder implements IBoardBuilder {
  private id: string;
  private title: string;
  private description?: string;
  private status?: BoardStatus;
  private type?: BoardType;
  private viewCount?: number;

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
