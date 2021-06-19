import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
// import { UserToGroupEntity } from '../user_group/user_group_entity';
import { UserEntity } from '../user/user.entity';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  // @ManyToMany((type) => UserEntity, (U) => U.groups)
  // users: UserEntity[];
  // @OneToMany(() => UserToGroupEntity, (u) => u.group)
  // groupUser: UserToGroupEntity[];
}
