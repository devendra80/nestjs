import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sequelize } from 'sequelize-typescript';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository : Repository<User>, ) {} // Declare and initialize the userRepository property

  async create(createUserDto: CreateUserDto) {
    console.log('create user in service :',  createUserDto);
    const user = new User();
    user.id = createUserDto.user;
    user.name = createUserDto.name;
    return await this.userRepository.save(user);
    
  }

  async findAll() {
    return await this.userRepository.find();
 }

  findOne(id: string) {
    return this.userRepository.findOne({where: {id}})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({where: {id}});
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  remove(id: string) {
    //return `This action removes a #${id} user`;
    return this.userRepository.delete(id);
  }
}
