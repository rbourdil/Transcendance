import { Controller, Request, Redirect, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // use this route to initiate authentication using 42 OAuth API
    @UseGuards(AuthGuard('42'))
    @Get('42')
    async auth42(@Request() req): Promise<any> {
        console.log('first get');
    }

    // callback route after user logged in to 42
    @UseGuards(AuthGuard('42'))
    @Get('42/callback')
    async auth42Callback(@Request() req): Promise<any> {
        return this.authService.login( req.user );
    }

}