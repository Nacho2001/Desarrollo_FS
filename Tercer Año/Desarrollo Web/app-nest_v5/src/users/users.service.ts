import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly repo: Repository<UserDto>,
    ){}

    async register(user: UserDto){
        try {
            const result = await this.repo.save(user);
            return result;
        } catch (err: any) {
            console.error(err);
            if (err instanceof QueryFailedError)
                throw new HttpException(`${err.name} ${err.driverError}`, 404);
            throw new HttpException(err.message, err.status);
        }
    }
}
