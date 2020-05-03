import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubSectionHotspot extends BaseEntity{

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    SubSectionId: string;

    @Column()
    Name: string;


    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @CreateDateColumn({type: "timestamp"})
    updatedAt: Date;
}