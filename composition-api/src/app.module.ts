// eslint-disable-next-line @typescript-eslint/no-var-requires
const password = require('../password');
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ComponsitionModule } from './componsition/componsition.module';
import { CommonModule } from './common/common.module';
import { TodolistModule } from './todolist/todolist.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { XijianhaoModule } from './xijianhao/xijianhao.module';
import { AidakaModule } from './aidaka/aidaka.module';

console.log(password, 'password');

@Module({
  imports: [
    TypeOrmModule.forRoot(password),
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
