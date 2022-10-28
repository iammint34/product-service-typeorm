import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    uuid: string;

    @Column()
    user_id: number;

    @Column()
    firstname: string;

    @Column()
    middlename: string;

    @Column()
    lastname: string;

    @Column()
    role: string;
}