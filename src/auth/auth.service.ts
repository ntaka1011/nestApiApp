import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Note, User } from '@prisma/client';
// ** Cho biết rằng auto init whenever we use
@Injectable({})
export class AuthService {
  // ** Quản lý thuộc tính

  constructor(private prismaService: PrismaService) {}
  // register(@Req() request: Request) {
  register() {
    return {
      message: 'Reggisteer username',
    };
  }
  login() {
    return {
      message: 'This a login account',
    };
  }
}
