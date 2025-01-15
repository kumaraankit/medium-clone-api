import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Posts1736883486387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'username', type: 'varchar', isUnique: true },
                    { name: 'email', type: 'varchar', isUnique: true },
                    { name: 'password', type: 'varchar' },
                ]
            })
        )
        await queryRunner.createTable(
            new Table({
                name: 'posts',
                columns: [
                    { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'title', type: 'varchar' },
                    { name: 'description', type: 'varchar' },
                    { name: 'body', type: 'text' },
                    { name: 'slug', type: 'varchar', isUnique: true },
                    { name: 'authorId', type: 'int' },
                    { name: 'createdAt', type: 'timestamp', default: 'now()' },
                    { name: 'updatedAt', type: 'timestamp', default: 'now()' },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            'posts',
            new TableForeignKey({
                columnNames: ['authorId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('posts');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('authorId') !== -1);
        await queryRunner.dropForeignKey('posts', foreignKey);

        await queryRunner.dropTable('posts');

        await queryRunner.dropTable('users');
    }

}
