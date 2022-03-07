import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { ComponsitionModule } from './componsition/componsition.module';
import { CommonModule } from './common/common.module';
import { TodolistModule } from './todolist/todolist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { XijianhaoModule } from './xijianhao/xijianhao.module';
import { AidakaModule } from './aidaka/aidaka.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'www.zmshe.com',
      port: 3306,
      username: 'root',
      password: 'Qwer@2021',
      database: 'composition',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ComponsitionModule,
    CommonModule,
    TodolistModule,
    TestModule,
    XijianhaoModule,
    AidakaModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
