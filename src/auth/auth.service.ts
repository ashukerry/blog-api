import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { strict } from 'assert';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  private userService: UsersService;
  constructor(private moduleRef: ModuleRef) {
    //modulereference gets the reference of any module that is exposed be it in the auth folder or anywhere in the nest js folder
    this.userService = this.moduleRef.get(UsersService, { strict: false });
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (user.password !== password) return false;
    return user;
  }
  registerUser(createUserDto: CreateUserDto) {
    return '';
  }
}
