import { Column, Model, Table, HasMany, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     firstname: string;

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     lastname: string;

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     email: string;

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     password: string;

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     phone: string;

     @Column({
          type: DataType.STRING,
          allowNull: false,
     })
     source: string;

     @Column({
          type: DataType.STRING
     })
     avatar: string;

     // @Column({ defaultValue: true })
     // isActive: boolean;

     // @HasMany(() => Post)
     // posts: Post[];
}