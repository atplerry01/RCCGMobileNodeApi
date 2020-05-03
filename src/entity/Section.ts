import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Section extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @CreateDateColumn({type: "timestamp"})
    updatedAt: Date;

}