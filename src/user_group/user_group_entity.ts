// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
// } from 'typeorm';
//
// import { GroupEntity } from '../group/group.entity';
// import { UserEntity } from '../user/user.entity';
//
// @Entity('user_group')
// export class UserToGroupEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @Column()
//   userId!: number;
//
//   @Column()
//   groupId: number;
//
//   @ManyToOne(() => UserEntity, (user) => user.userGroup, {
//     nullable: false,
//   })
//   public user!: UserEntity;
//
//   @ManyToOne(() => GroupEntity, (group) => group.groupUser, {
//     nullable: false,
//   })
//   public group!: GroupEntity;
//
//   @CreateDateColumn({
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP(6)',
//   })
//   public created_at: Date;
//
//   @UpdateDateColumn({
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP(6)',
//     onUpdate: 'CURRENT_TIMESTAMP(6)',
//   })
//   public updated_at: Date;
// }
