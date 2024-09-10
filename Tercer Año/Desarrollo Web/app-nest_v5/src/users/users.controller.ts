import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';
import { Response } from 'express';

/* Al pasar "users" como al decorador, se le indica que al ingresar
la ruta "users", se redirigirá a este controlador
*/
@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService){}

    @Get()
    route2():string{
      return "secondary route"
    }

    @Post()
    async register(@Body() user: UserDto, @Res() response: Response){
      const result = await this.service.register(user);
      response
        .status(HttpStatus.CREATED)
        .json({ ok: true, result, msg: 'User created!' });
    }
}
