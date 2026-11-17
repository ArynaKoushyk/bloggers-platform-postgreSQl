import { Module, Global } from '@nestjs/common';
import { CoreModule } from '../core.module';
import { databaseProviders, PG_CONNECTION } from './database.provider';

@Global() // Делает модуль доступным во всем приложении без повторного импорта
@Module({
  imports: [CoreModule],
  providers: [...databaseProviders],
  exports: [PG_CONNECTION],
})
export class DatabaseModule {}
