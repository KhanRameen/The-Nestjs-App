import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //For "/" path, pass in the string and it becomes the route 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //hits the same "/" path
  getHello(): string {
    return this.appService.getHello();
  }
}
