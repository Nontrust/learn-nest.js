import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigYaml } from '@config/core/config.yaml';
import { YamlService } from '@config/core/yaml/yaml.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [() => ConfigYaml.load()],
    }),
  ],
  providers: [ConfigYaml, YamlService],
  exports: [ConfigYaml, YamlService],
})
export class YamlModule {}
