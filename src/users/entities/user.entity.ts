import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({
        description: 'Unique identifier of the user',
        example: 1
    })
    id: number;

    @Column({ length: 50 })
    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe'
    })
    name: string;

    @Column({ unique: true })
    @ApiProperty({
        description: 'The email address of the user',
        example: 'john.doe@example.com'
    })
    email: string;

    @Column({ nullable: false })
    @ApiProperty({
        description: 'The password of the user (hashed)',
        example: 'hashedpassword123',
        writeOnly: true
    })
    password: string;

    @Column({ default: true })
    @ApiProperty({
        description: 'Indicates whether the user is active or not',
        example: true
    })
    isActive: boolean;
}
