import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Controlador principal de la aplicación, no requiere prefijos
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Primary Route"
  }
}
