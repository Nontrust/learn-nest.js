import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from '@src/app.module';
import validationPipe from '@config/core/config.validation';
import { PORT } from '@app/constant';

/** when using default(express) context */
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  // https://docs.nestjs.com/techniques/compression
  // TODO: reverse Proxy application server 사용 시 압축 미들웨어 사용하면 안됨
  app.useGlobalPipes(validationPipe);
  app.use(compression());

  await app.listen(PORT);
};

bootstrap();

/** when using Fastify context -> 아직 11%정도만 기능 구현... */
// const bootstrapFastify = async () => {
//   const app = await NestFactory.create<NestFastifyApplication>(
//     AppModule,
//     new FastifyAdapter(),
//   );
//   await app.listen(PORT);
//   // (3000, '0.0.0.0');
// };
// bootstrapFastify();
