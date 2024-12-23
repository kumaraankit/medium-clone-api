import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { AppDataSource, typeOrmConfig } from 'src/data-source';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRootAsync({
    useFactory: async () => typeOrmConfig,
  }), HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
