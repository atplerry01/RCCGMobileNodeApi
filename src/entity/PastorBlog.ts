import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pastorblog")
export class PastorBlog extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

}