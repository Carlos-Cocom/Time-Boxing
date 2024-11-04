import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { prismaService } from 'src/prisma/prisma.service';

@Injectable()
export class userService {
    constructor(private readonly prisma: prismaService){}

    async getAllUsers(){
        return this.prisma.user.findMany();
    }
}
