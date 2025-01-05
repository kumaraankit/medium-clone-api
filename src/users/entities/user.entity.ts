import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    googleId: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ default: true })
    isActive: boolean;
}
