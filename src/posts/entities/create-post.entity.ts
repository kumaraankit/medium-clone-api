import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class CreatePost {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string;

    @Column()
    description: string
}
