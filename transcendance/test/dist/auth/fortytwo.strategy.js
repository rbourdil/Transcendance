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
            clientID: "u-s4t2ud-66eb43c67b39b9d36711e2f81ccda62ed7dd6d97518b3df88e71de5a7d102618",
            clientSecret: "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",
            callbackURL: "http://localhost:3000",
            profileFields: {
                'username': 'login',
                'profileUrl': 'url',
            },
        });
        this.usersService = usersService;
    }
    async validate(accessToken, refreshToken, profile, cb) {
        const user = await this.usersService.createUser(profile);
        return user;
    }
};
FortyTwoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], FortyTwoStrategy);
exports.FortyTwoStrategy = FortyTwoStrategy;
//# sourceMappingURL=fortytwo.strategy.js.map