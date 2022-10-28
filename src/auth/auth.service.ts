import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private jwtTokenService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    decodeJwt(token: string): {} {
        return this.jwtTokenService.decode(token);
    }

    extractAuthToken(token: any) {
        return token.token
    }

    async checkUser(User?: { auth?: { user_id?: number } }): Promise<User> {
        const user_id: number = User.auth.user_id;
        return this.userRepository.findOne({ where: { user_id: user_id } });
    }

}
