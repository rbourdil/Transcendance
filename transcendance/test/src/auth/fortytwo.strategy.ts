import { Strategy, VerifyCallback } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
                clientID: "u-s4t2ud-22deb755384322a2cb57f9a84598fa679819ff6a73acef2f7cc573c8b5e22e15",
                clientSecret: "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",
                callbackURL: "http://localhost:3000/auth/42/callback",
                profileFields: {
                    'username': 'login',
                    'profileUrl': 'url',
                },
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
        console.log('validate');
        const { username, profileUrl } = profile;
        const userInfo = {
            login: username,
            nickname: username,
            avatarURL: profileUrl,
        }
        let user = await this.usersService.getUser( { login: userInfo.login } );
        if (!user) { // if no user is found with this login
            user = await this.usersService.createUser( userInfo );
        }
        return user;
    }

}
