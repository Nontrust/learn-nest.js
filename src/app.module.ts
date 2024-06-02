import { Module } from '@nestjs/common';
import { LoggerModule } from '@config/core/logger/logger.module';
import { YamlModule } from '@config/core/yaml/yaml.module';
import { BoardModule } from '@src/board/board.module';
import { CatsModule } from '@src/cats/cats.module';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { DatabaseModule } from '@config/core/database/database.module';

@Module({
  imports: [CatsModule, BoardModule, LoggerModule, YamlModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
