import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import * as crypto from "crypto";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    // 🔍 DEBUG: Log login attempt details
    console.log('🔍 Admin Login attempt for email:', email);
    console.log('🔍 User found:', !!user);

    if (!user) {
      console.log('❌ User not found in database');
      throw new UnauthorizedException("Invalid credentials");
    }

    // 🔍 DEBUG: Log password comparison
    console.log('🔍 Password from request:', password);
    console.log('🔍 Password from database:', user.password);
    console.log('🔍 Passwords match:', user.password === password);
    console.log('🔍 User practitionerType:', user.practitionerType);

    if (user.password !== password) {
      console.log('❌ Password mismatch');
      throw new UnauthorizedException("Invalid credentials");
    }

    if (user.practitionerType !== "admin") {
      console.log('❌ Not an admin user, type is:', user.practitionerType);
      throw new UnauthorizedException("Access denied: admin only");
    }

    console.log('✅ Admin login successful');
    return {
      accessToken: "dummy-token",
      practitionerType: user.practitionerType,
      userId: user.id,
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return { message: "If user exists, reset link sent" };
    }
    const token = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins
    await this.usersService.update(user.id, user);
    console.log("RESET TOKEN (DEV ONLY):", token);
    return { message: "Reset token generated", token };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.usersService.findByResetToken(token);

    if (
      !user ||
      !user.resetPasswordExpires ||
      user.resetPasswordExpires < new Date()
    ) {
      throw new BadRequestException("Token invalid or expired");
    }

    user.password = newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await this.usersService.update(user.id, user);

    return { message: "Password reset successful" };
  }
}
