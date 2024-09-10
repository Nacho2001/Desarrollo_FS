import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Users {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: true, length: 30 })
    username: string;

    @Column({ type: 'varchar', nullable: false, length: 255 })
    password: string;

    @Column({ type: 'varchar', nullable: true, length: 100 })
    email:string;

    @Column({ type: 'bool', default: true })
    isActive: boolean;
}