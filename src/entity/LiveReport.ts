import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("livereport")
export class LiveReport extends BaseEntity {

    @PrimaryGeneratedColumn("uuid") 
    id: string;

    @Column()
    name: string;

}