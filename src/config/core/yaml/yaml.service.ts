import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as yaml from 'yaml';
import { ConfigYaml } from '@config/core/config.yaml';

@Injectable()
export class YamlService {
  private readonly yaml: Record<string, any>;

  constructor(private readonly yamlConfig: NestConfigService) {
    const file = fs.readFileSync(ConfigYaml.configYaml, 'utf-8');
    this.yamlConfig = yaml.parse(file);
  }
  get(key: string): any {
    return key
      .split('.')
      .reduce((acc, part) => acc && acc[part], this.yamlConfig);
  }
}
