import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  // Việc kết nối csdl thông qua module prisma
  // dùng chung cho toàn app
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:Abc123456789@localhost:5434/testdb?schema=public',
        },
      },
    });
  }
}
