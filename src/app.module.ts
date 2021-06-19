import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
// import { UserGroupModule } from './user_group/user-group.module';
import { CreateUsers } from './database/seeds';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'swvl',
      synchronize: true,
      logging: true,
      entities: ['dist/**/*.entity.js'],
    }),
    UserModule,
    GroupModule,
    CreateUsers,
    // UserGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
