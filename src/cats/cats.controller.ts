import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Patch,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('say/:id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Patch('say/:id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete('say/:id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }

  @Post('auth')
  @Header('Cache-Control', 'X-authorization')
  findAllRequest(@Req() request: Request) {
    return request;
  }

  @Get('redirect')
  @Redirect('moves', 302)
  redirectToMovingCats() {
    // return req;
  }

  @Get('moves')
  movingCats(@Req() req: Request) {
    console.log('req', req);
    return 'moving!';
  }
}
