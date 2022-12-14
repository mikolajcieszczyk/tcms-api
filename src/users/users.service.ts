import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<User>) {}

  async insert(userName: string, password: string) {
    const username = userName.toLowerCase();
    const newUser = new this.userModel({
      username,
      password,
    });
    await newUser.save();
    return newUser;
  }

  async find(userName: string) {
    const username = userName.toLowerCase();
    const user = await this.userModel.findOne({ username });
    return user;
  }
}
