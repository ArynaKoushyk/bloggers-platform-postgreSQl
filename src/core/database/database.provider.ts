import type { Provider } from '@nestjs/common';
import { Pool } from 'pg';
import { CoreConfig } from '../core.config';

export const PG_CONNECTION = 'PG_CONNECTION';

export const databaseProviders: Provider[] = [
  {
    provide: PG_CONNECTION,
    inject: [CoreConfig],
    useFactory: (coreConfig: CoreConfig) =>
      new Pool({
        host: coreConfig.dbHost,
        port: coreConfig.dbPort,
        user: coreConfig.dbUsername,
        password: coreConfig.dbPassword,
        database: coreConfig.dbName,
      }),
  },
];
