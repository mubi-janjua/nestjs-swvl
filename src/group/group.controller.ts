import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroupService } from './group.service';
// import { UserDTO } from './user.dto';

@Controller()
export class GroupController {
  constructor(private groupService: GroupService) {}
  @Get('api/groups')
  showAllUser() {
    return this.groupService.showAll();
  }

  @Post('api/create/group')
  createUser(@Body() data) {
    console.log(data);
    return this.groupService.create(data);
  }

  @Get('api/get/group/:id')
  readUser(@Param('id') id: string) {
    return this.groupService.read(id);
  }

  @Put('api/update/group/:id')
  updateUser(@Param('id') id: string, @Body() data) {
    return this.groupService.update(id, data);
  }

  @Delete('api/delete/group/:id')
  destroyUser(@Param('id') id: string) {
    return this.groupService.destroy(id);
  }
}
