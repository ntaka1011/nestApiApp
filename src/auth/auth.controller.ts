import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

// ** Đường dẫn đến contoller
@Controller('auth')
export class AuthController {
  // auth Service is automatically created when initializing the controller
  // controller nhận yêu cầu rùi đdi gọi service
  // chúng ta truyền auth service vào controller
  // khi mà authController đc tạo ra thì auth service cũng đc tạo ra
  constructor(private authService: AuthService) {}

  // some requests from client
  // ** @Req() req: Request: request bên nodejs
  // ** @Body() body: any: Body
  // ** Body is a "Data transfer Object" - DTO
  @Post('register') // rigister a new user
  register(@Body() body: AuthDTO) {
    // not validate using class-validation AND class-transform
    console.log(
      '🚀 ~ file: auth.controller.ts:16 ~ AuthController ~ register ~ req:',
      body,
    );
    // return 'register a new user';
    // return JSON
    return this.authService.register(body);
  }

  // POST .../auth/login
  @Post('login') // rigister a new user
  login() {
    return this.authService.login();
  }
}
