import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from './models/users.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    public async getAllUsers(): Promise<User[]> {
        // await this.usersService.logIn(testUser);
        // return await this.usersService.findAllUsers();
        // return 'Hello';
        return this.usersService.findAll();
        // const newUser = new CreateUserDto();
        // newUser.username = 'testUser';
        // newUser.password = 'testPass!';
        // return this.usersService.create(newUser);
    }

    @Get(':id')
    public async getUserById(@Param('id') id): Promise<User> {
        return await this.usersService.findById(id);
    }

    @Post()
    public async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto);
    }
}
