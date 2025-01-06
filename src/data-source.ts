import { DataSource } from 'typeorm';
import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    // entities: [__dirname + '/**/*.entity.{js,ts}'],
    entities: [path.join(__dirname, '**', 'entities', '*.entity.{ts,js}')],
    migrations: [__dirname + '/migrations/*.{js,ts}'],
});
// export const typeOrmConfig: TypeOrmModuleOptions = {
//     ...AppDataSource.options,
// };