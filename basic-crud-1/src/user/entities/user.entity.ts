import { IsDate, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "wk_user" })
export class User {
    //@PrimaryGeneratedColumn('uuid')
    //@IsUUID()
    @IsNotEmpty()
    @PrimaryColumn()
    id: string;

    @Column({ type: 'varchar', length: 255, nullable: true})
    name: string

    @IsDate()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @IsDate()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
