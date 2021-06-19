import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserEntity } from './user/user.entity';
import { GroupEntity } from './group/group.entity';

@Injectable()
export class AppService {
  constructor(private readonly entityManager: EntityManager) {
    // this.entityManager
    //   .save<GroupEntity, Partial<GroupEntity>>(GroupEntity, [
    //     {
    //       name: 'Group1',
    //     },
    //     {
    //       name: 'Group2',
    //     },
    //   ])
    //   .then((data: Array<Partial<GroupEntity>>) => {
    //     console.log(data);
    //   });
  }
  getHello(): string {
    return 'Hello World!';
  }
}
