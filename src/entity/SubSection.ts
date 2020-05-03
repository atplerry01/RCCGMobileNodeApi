import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubSection extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;
    
    @Column()
    SectionId: string;

    @Column()
    Name: string;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @CreateDateColumn({type: "timestamp"})
    updatedAt: Date;

}