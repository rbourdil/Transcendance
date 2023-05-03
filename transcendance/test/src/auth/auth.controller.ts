import { Controller, Request, Redirect, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    // use this route to initiate authentication using 42 OAuth API
    @UseGuards(AuthGuard('42'))
    @Get('42')
    async auth42(@Request() req): Promise<any> {
        console.log('first get');
    }

    // callback route after user logged in to 42
    @Redirect()
    @Get('42/callback')
    async auth42Callback(@Request() req): Promise<any> {
        if ( req.user ) {
            return {
                url: "https://www.cmpbois.com/",
            };
        } else {
            return {
                url: "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal",
            };
        }
    }

}
