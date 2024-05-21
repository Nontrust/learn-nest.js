import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import getOrmConfig from '../config.typeorm';
import { YamlService } from '@app/src/config/core/yaml/yaml.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [YamlService],
      useFactory: (yamlService: YamlService) =>
        getOrmConfig(yamlService, 'mysql'),
    }),
  ],
  providers: [YamlService],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
