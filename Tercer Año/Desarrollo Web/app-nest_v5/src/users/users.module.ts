import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
    Modulo de usuarios, en esta sección se importa el controlador y 
    el servicio
*/
@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
