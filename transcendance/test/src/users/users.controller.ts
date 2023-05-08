import { Controller, Get, Delete, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@UseGuards(AuthGuard('jwt'))
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
