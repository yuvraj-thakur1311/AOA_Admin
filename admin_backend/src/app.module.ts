import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersController } from "./controllers/users.controller";
import { AuthController } from "./controllers/auth.controller";
import { UsersService } from "./services/users.service";
import { AuthService } from "./services/auth.service";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",

        host: configService.get<string>("DB_HOST"),
        port: Number(configService.get<number>("DB_PORT")),
        username: configService.get<string>("DB_USERNAME"),
        password: configService.get<string>("DB_PASSWORD"),
        database: configService.get<string>("DB_NAME"),

        entities: [__dirname + "/**/*.entity{.ts,.js}"],

        // ✅ AUTO CREATE TABLES
        synchronize: true,

        logging: true,

        // ✅ REQUIRED FOR AWS RDS
        ssl: {
          rejectUnauthorized: false,
        },

        extra: {
          max: 10,
        },
      }),
    }),
    TypeOrmModule.forFeature([User, Address]),
  ],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class AppModule { }
