import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from '../constant';
import validationPipe from './config/core/config.validation';

/** when using default(express) context */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationPipe);

  await app.listen(PORT);
}

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
