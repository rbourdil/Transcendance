import { User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto';
declare const FortyTwoStrategy_base: new (...args: any[]) => any;
export declare class FortyTwoStrategy extends FortyTwoStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(accessToken: string, refreshToken: string, profile: CreateUserDto, cb: Function): Promise<User>;
}
export {};
