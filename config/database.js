module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"), // host 
        port: env.int("DATABASE_PORT", 3306), // 端口
        database: env("DATABASE_NAME", "blog"), // 数据库
        username: env("DATABASE_USERNAME", "blog"), // 用户名
        password: env("DATABASE_PASSWORD", "QQyy2007412"), // 密码
      },
      options: {},
    },
  },
});



// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
