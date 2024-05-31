import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import getOrmConfig from '@config/core/config.typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from '@config/core/logger/logger.module';
import { YamlService } from '@config/core/yaml/yaml.service';
import { LoggerService } from '@config/core/logger/logger.service';
import { DataSource, DataSourceOptions } from 'typeorm';

describe('DbConnection', () => {
  let app: INestApplication;
  let AppDataSource: DataSource;

  beforeAll(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [AppModule, getDynamicModule()],
    }).compile();

    //given
    const yamlService = new YamlService(new ConfigService());
    const loggerService = new LoggerService();

    AppDataSource = new DataSource(
      <DataSourceOptions>getOrmConfig('mysql', yamlService, loggerService),
    );
    app = testingModule.createNestApplication();
    await app.init();
    await AppDataSource.initialize();
  });

  it('mysql 커넥션 테스트', () => {
    // when
    // then
    expect(AppDataSource.isInitialized).toBe(true);
  });

  afterAll(async () => {
    await app.close();
    await AppDataSource.destroy();
  });
});

const getDynamicModule = () =>
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule, LoggerModule],
    inject: [YamlService, LoggerService],
    useFactory: (yamlService: YamlService, loggerService: LoggerService) =>
      getOrmConfig('mysql', yamlService, loggerService),
  });
