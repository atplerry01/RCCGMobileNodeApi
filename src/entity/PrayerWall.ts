import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prayerwall")
export class PrayerWall extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

}