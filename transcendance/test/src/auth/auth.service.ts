import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: any): Promise<any> {
        const payload = {
            id: user.id,
            login: user.login,
        }
        return {
            id: payload.id,
            login: payload.login,
            access_token: this.jwtService.sign(payload),
        };
    }
}