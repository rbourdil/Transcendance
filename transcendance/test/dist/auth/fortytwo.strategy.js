"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortyTwoStrategy = void 0;
const passport_42_1 = require("passport-42");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let FortyTwoStrategy = class FortyTwoStrategy extends (0, passport_1.PassportStrategy)(passport_42_1.Strategy) {
    constructor(usersService) {
        super({
            clientID: "u-s4t2ud-22deb755384322a2cb57f9a84598fa679819ff6a73acef2f7cc573c8b5e22e15",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/42/callback",
            profileFields: {
                'username': 'login',
                'profileUrl': 'url',
            },
        });
        this.usersService = usersService;
    }
    async validate(accessToken, refreshToken, profile) {
        const { username, profileUrl } = profile;
        const userInfo = {
            login: username,
            nickname: username,
            avatarURL: profileUrl,
        };
        let user = await this.usersService.getUser({ login: userInfo.login });
        if (!user) {
            user = await this.usersService.createUser(userInfo);
        }
        console.log('validate');
        return user;
    }
};
FortyTwoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], FortyTwoStrategy);
exports.FortyTwoStrategy = FortyTwoStrategy;
//# sourceMappingURL=fortytwo.strategy.js.map