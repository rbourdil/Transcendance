import { Strategy } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
                clientID: "u-s4t2ud-66eb43c67b39b9d36711e2f81ccda62ed7dd6d97518b3df88e71de5a7d102618",
                clientSecret: "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",
                callbackURL: "http://localhost:3000",
                profileFields: {
                    'username': 'login',
                    'profileUrl': 'url',
                },
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: CreateUserDto, cb: Function): Promise<User> {
        const user = await this.usersService.createUser(profile);
        return user;
    }

}