import { Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Post('rendeles')
  @Redirect('/rendeles')
  getIndex() {

  } 

  @Get('rendeles')
  @Render('rendeles')
  getRendeles() {

  }
}
 