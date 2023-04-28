import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get(':id')
	async findOne(@Param('id') id: number): Promise<User> {
		return this.usersService.getUser({
			id,	
		});
	}

	@Delete(':id')
	async deleteOne(@Param('id') id: number): Promise<User> {
		return this.usersService.deleteUser({
			id,
		});
	}

}
