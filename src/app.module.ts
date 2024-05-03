import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BoardModule } from './board/board.module';
import { LoggerModule } from './config/core/logger/logger.module';

@Module({
  imports: [CatsModule, BoardModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
