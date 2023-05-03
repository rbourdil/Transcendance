import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
		return this.usersService.getUser({
			id,	
		});
	}

	@Delete(':id')
	async deleteOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
		return this.usersService.deleteUser({
			id,
		});
	}

}
