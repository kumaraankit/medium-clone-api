import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1736102289134 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const tableExist = await queryRunner.hasTable('users');

        if (tableExist) {
            await queryRunner.query('DROP TABLE IF EXISTS users CASCADE');
        }
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {

                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        length: '50',
                        isNullable: false,
                    },

                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'isAdmin',
                        type: 'boolean',
                        default: false,
                    },

                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
