import { Controller, Get } from '@nestjs/common';

/* Al pasar "users" como al decorador, se le indica que al ingresar
la ruta "users", se redirigirá a este controlador
*/
@Controller('users')
export class UsersController {
    @Get()
    route2():string{
      return "secondary route"
    }
}
