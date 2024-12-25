import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'unique id of the user', example: 1 })
    id: number;

    @Column({ length: 50 })
    @ApiProperty({ description: 'name of the user', example: "name" })
    name: string;

    @Column({ unique: true })
    @ApiProperty({ description: 'email of the user', example: 'user@email.com' })
    email: string;

    @Column({ nullable: false })
    @ApiProperty({ description: 'password of the user', example: 'password' })
    password: string;

    @Column({ default: true })
    @ApiProperty({ description: 'checks if user is active', example: true })
    isActive: boolean;
}
