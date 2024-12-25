import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../../entities/user.entity';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiOkResponse({ description: 'User Created Successfully', type: User })
    @ApiBody({ description: 'the user data to create', type: User })
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}
