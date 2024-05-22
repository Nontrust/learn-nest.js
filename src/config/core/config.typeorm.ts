import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { YamlService } from '@app/src/config/core/yaml/yaml.service';
import { DatabaseType } from '@app/src/config/core/database/database.type';
import { LoggerService } from '@app/src/config/core/logger/logger.service';

const getOrmConfig = (
  databaseType: DatabaseType,
  yamlService: YamlService,
  loggerService: LoggerService,
): TypeOrmModuleOptions => {
  const PREFIX = `db.${databaseType}`;
  const options = {
    type: databaseType,
    host: yamlService.get(`${PREFIX}.host`),
    port: parseInt(yamlService.get(`${PREFIX}.port`)),
    username: yamlService.get(`${PREFIX}.username`),
    password: yamlService.get(`${PREFIX}.password`).toString(),
    database: yamlService.get(`${PREFIX}.database`),
    synchronize: yamlService.get(`${PREFIX}.synchronize`) === true, // 개발 환경에서만 true로 설정하세요. 운영 환경에서는 false로 설정하세요.
    entities: [process.cwd() + '/dist/**/*.entity{.ts,.js}'],
  };

  loggerService.log('TypeOrm option is', options);
  return options;
};

export default getOrmConfig;
