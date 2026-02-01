import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("login")
  async login(
    @Body("email") email: string,
    @Body("password") password: string,
  ) {
    console.log('🔍 AUTH CONTROLLER: Login request received');
    console.log('🔍 Email:', email, 'Password:', password);
    return this.authService.login(email, password);
  }

  @Post("forgot-password")
  forgotPassword(@Body("email") email: string) {
    return this.authService.forgotPassword(email);
  }

  @Post("reset-password")
  resetPassword(
    @Body("token") token: string,
    @Body("newPassword") newPassword: string,
  ) {
    return this.authService.resetPassword(token, newPassword);
  }
}
