import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import * as process from 'process';

export class YamlConfig {
  static configYaml: string = `config${process.env.NODE_ENV ? `-${process.env.NODE_ENV}` : ``}.yml`;
  static load() {
    const yamlFilePath = path.resolve(process.cwd(), this.configYaml);

    const file = fs.readFileSync(yamlFilePath, 'utf-8');
    const yamlConfig = yaml.parse(file);
    return {
      ...process.env,
      ...yamlConfig,
    };
  }
}
