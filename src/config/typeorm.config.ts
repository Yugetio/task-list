import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config'

interface DBConfig {
  type: any
  port: number
  database: string
  host: string
  username: string
  password: string
  synchronize: boolean
}

const dbConfig: DBConfig = config.get('db')

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize
};
