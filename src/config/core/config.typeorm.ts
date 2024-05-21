import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { YamlService } from '@app/src/config/core/yaml/yaml.service';
import { DatabaseType } from '@app/src/config/core/database/database.type';

const getOrmConfig = (
  yamlService: YamlService,
  databaseType: DatabaseType,
): TypeOrmModuleOptions => {
  const PREFIX = `db.${databaseType}`;
  return {
    type: databaseType,
    host: yamlService.get(`${PREFIX}.host`),
    port: parseInt(yamlService.get(`${PREFIX}.port`)),
    username: yamlService.get(`${PREFIX}.username`),
    password: yamlService.get(`${PREFIX}.password`).toString(),
    database: yamlService.get(`${PREFIX}.database`),
    synchronize: yamlService.get(`${PREFIX}.synchronize`) === 'true', // 개발 환경에서만 true로 설정하세요. 운영 환경에서는 false로 설정하세요.
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  };
};

export default getOrmConfig;
