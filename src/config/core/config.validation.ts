import { ValidationPipe } from '@nestjs/common';

export const validationPipe: ValidationPipe = new ValidationPipe({
  whitelist: true, // DTO에서 정의하지 않은 속성을 제거
  forbidNonWhitelisted: false, // 정의되지 않은 속성이 들어오면 오류 발생
  transform: true, // 요청 데이터를 DTO의 타입으로 자동 변환
  disableErrorMessages: false, // 환경에 따라 에러 메시지를 숨길 수 있음
});

export default validationPipe;
