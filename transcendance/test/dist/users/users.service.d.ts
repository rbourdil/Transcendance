import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUser(id: Prisma.UserWhereUniqueInput): Promise<User | null>;
    getUserThrow(id: Prisma.UserWhereUniqueInput): Promise<User>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    deleteUser(id: Prisma.UserWhereUniqueInput): Promise<User>;
}
