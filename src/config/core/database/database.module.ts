import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YamlService } from '@app/src/config/core/yaml/yaml.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerService } from '@app/src/config/core/logger/logger.service';
import { LoggerModule } from '@app/src/config/core/logger/logger.module';
import getOrmConfig from '@config/core/config.typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, LoggerModule],
      inject: [YamlService, LoggerService],
      useFactory: (yamlService: YamlService, loggerService: LoggerService) =>
        getOrmConfig('mysql', yamlService, loggerService),
    }),
  ],
  providers: [YamlService, LoggerService],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
