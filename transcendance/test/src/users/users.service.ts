import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getUser(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: id,
        });
    }

    async getUserThrow(id: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.findUniqueOrThrow({
            where: id,
        })
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data,
        });
    }

    async deleteUser(id: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where: id,
        });
    }

}
