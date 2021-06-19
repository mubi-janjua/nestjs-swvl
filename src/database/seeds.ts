import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { UserEntity } from '../user/user.entity';

export class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values([
        {
          name: 'Timber',
          email: 'Saw@g.com',
          phone: '3456789',
          address: 'qwerty',
        },
      ])
      .execute();
  }
}
