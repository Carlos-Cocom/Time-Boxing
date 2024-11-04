import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: userService
    ){}

    @Get()

    getAllUsers(){
    
    }
}
