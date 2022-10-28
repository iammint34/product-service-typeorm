import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    uuid: string;

    @Column({ unique: true })
    code: string;

    @Column()
    name: string;

    @Column({type: "decimal", precision: 9, scale: 2, default: 0})
    price: number;
    
    @CreateDateColumn({ type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;
    
    @UpdateDateColumn({ type: "datetime", default: () => null, onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;

    @Column()
    status: string;
}