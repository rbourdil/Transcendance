import { UsersService } from './users.service';
import { User } from '@prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findOne(id: number): Promise<User>;
    deleteOne(id: number): Promise<User>;
}
