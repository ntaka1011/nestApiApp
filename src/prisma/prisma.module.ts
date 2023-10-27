import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// Liên quan đến csdl thì phải globals

@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService], // **  other Module can use PrismaService
})
export class PrismaModule {}
