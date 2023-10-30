import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { AuthDTO } from './dto';
// ** Cho biết rằng auto init whenever we use
@Injectable({})
export class AuthService {
  // ** Quản lý thuộc tính

  constructor(private prismaService: PrismaService) {}
  // register(@Req() request: Request) {
  async register(authDTO: AuthDTO) {
    const hasnPassword = await argon.hash(authDTO.password);

    // thuoc tinh select cho phep hieen ra trường nào
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: hasnPassword,
          firstName: '',
          lastName: '',
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    } catch (error) {
      return {
        error: error,
      };
    }
  }
  login() {
    return {
      message: 'This a login account',
    };
  }
}
