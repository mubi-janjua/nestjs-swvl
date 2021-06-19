import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get('api/users')
  showAllUser() {
    return this.userService.showAll();
  }

  @Post('api/create/users')
  createUser(@Body() data: UserDTO) {
    return this.userService.create(data);
  }

  @Get('api/get/user/:id')
  readUser(@Param('id') id: string) {
    return this.userService.read(id);
  }

  @Put('api/update/user/:id')
  updateUser(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
    return this.userService.update(id, data);
  }

  @Delete('api/delete/user/:id')
  destroyUser(@Param('id') id: string) {
    return this.userService.destroy(id);
  }
}
