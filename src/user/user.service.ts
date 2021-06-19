import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { GroupEntity } from '../group/group.entity';
// import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private groupRepository: Repository<GroupEntity>,
  ) {}

  async showAll() {
    return await this.userRepository.find();
  }

  async create(data) {
    console.log(this.userRepository);
    console.log(data.groups);
    const groups = await this.groupRepository.findByIds([data.groups]);
    const user = new UserEntity();
    user.name = 'Mubeen';
    user.email = 'mub1m7@meuibjeeen.com';
    user.phone = '4567890';
    user.address = 'ertyuiop';
    user.groups = groups;
    await this.userRepository.save(user);
    console.log(user);
    return user;
  }

  async read(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, data) {
    await this.userRepository.update({ id }, data);
    return await this.userRepository.findOne({ where: { id } });
  }

  async destroy(id: string) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }
}
