import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
	providers: [UsersService],
	controllers: [UsersController],
	imports: [PrismaModule],
	exports: [UsersService],
})
export class UsersModule {}
