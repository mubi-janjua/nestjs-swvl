import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GroupEntity } from './group.entity';
import { Repository } from 'typeorm';
// import { UserDTO } from './user.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(GroupEntity)
    private groupRepository: Repository<GroupEntity>,
  ) {}

  async showAll() {
    return await this.groupRepository.find();
  }

  async create(data) {
    const user = await this.groupRepository.create(data);
    await this.groupRepository.save(user);
    return user;
  }

  async read(id: string) {
    return await this.groupRepository.findOne({ where: { id } });
  }

  async update(id: string, data) {
    await this.groupRepository.update({ id }, data);
    return await this.groupRepository.findOne({ where: { id } });
  }

  async destroy(id: string) {
    await this.groupRepository.delete({ id });
    return { deleted: true };
  }
}
