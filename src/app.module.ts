import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CourtsModule } from './courts/courts.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ClientsModule,
    MongooseModule.forRoot(
      'mongodb+srv://mikolaj:uir1WmJoMSRnuVhH@cluster0.eed2uhv.mongodb.net/tcms-api?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot(),
    CourtsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
