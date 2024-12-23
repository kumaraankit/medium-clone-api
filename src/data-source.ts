import { DataSource } from 'typeorm';
import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: true,
    entities: [__dirname + '/**/*.entity.{js,ts}'],
    migrations: [__dirname + '/migrations/*.{js,ts}'],
});
export const typeOrmConfig: TypeOrmModuleOptions = {
    ...AppDataSource.options,
};