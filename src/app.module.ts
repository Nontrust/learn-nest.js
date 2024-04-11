import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [CatsModule, BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
