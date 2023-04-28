import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { FortyTwoStrategy } from './fortytwo.strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
    providers: [FortyTwoStrategy],
    controllers: [AuthController],
    imports: [UsersModule, PassportModule],
})
export class AuthModule {}