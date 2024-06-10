import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('api/wk/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new user entry' })
  async create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto :', createUserDto);
    const user = await this.userService.create(createUserDto);
    const response = {
      data: user,
      message: "Success"
    };
    return response;
  }

  @Get()
  @ApiOperation({ summary: ' Retrieves a list of users and their entitlements for a specific app' })
  async findAll() {
    const users = await this.userService.findAll();
    console.log('users :', users);
    const response = {
      data: users,
      message: "Success"
    };
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find user for given identifier' })
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    const response = {
      data: user,
      message: "Success"
    };
    return response;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user entry for given identifier' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(id, updateUserDto);
    const response = {
      data: user,
      message: "Success"
    };
    return response;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes a user identified by their unique identifier.' })
  async remove(@Param('id') id: string) {
    const user =  await this.userService.remove(id);
    const response = {
      data: user,
      message: "Success"
    };
    return response;
  }
}
