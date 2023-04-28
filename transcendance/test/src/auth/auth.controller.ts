import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    // use this route to initiate authentication using 42 OAuth API
    @UseGuards(AuthGuard('42'))
    @Get('42')
    async auth42(@Request() req) {
        return req.user;
    }

    // callback route after user logged in to 42
    @UseGuards(AuthGuard('42'))
    @Get('42/callback')
    async auth42Callback() {
        console.log('here');
    }

}