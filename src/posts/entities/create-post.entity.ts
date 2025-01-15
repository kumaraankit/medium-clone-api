import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class CreatePost {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: 'text' })
    body: string;

    @Column({ unique: true })
    slug: string;

    @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
    author: User

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
