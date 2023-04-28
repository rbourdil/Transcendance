import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUser(id: Prisma.UserWhereUniqueInput): Promise<User> {
        console.log(id);
        return this.prisma.user.findUniqueOrThrow({
            where: id,
        })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        console.log(data);
        return this.prisma.user.create({
            data,
        });
    }

    async deleteUser(id: Prisma.UserWhereUniqueInput): Promise<User> {
        console.log(id);
        return this.prisma.user.delete({
            where: id,
        });
    }

}
