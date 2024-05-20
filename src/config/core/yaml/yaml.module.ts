import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { YamlConfig } from '../yamlConfig';
import { YamlService } from './yaml.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [() => YamlConfig.load()],
    }),
  ],
  providers: [YamlConfig, YamlService],
  exports: [YamlConfig, YamlService],
})
export class YamlModule {}
