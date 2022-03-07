export default {
  type: 'mysql',
  host: 'www.zmshe.com',
  port: 3306,
  username: 'root',
  password: 'Qwer@2021',
  database: 'composition',
  entities: [__dirname + '/entity/*.{ts,js}'],
  synchronize: true,
  autoLoadEntities: true,
}