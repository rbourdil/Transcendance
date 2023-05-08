import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    auth42(req: any): Promise<any>;
    auth42Callback(req: any): Promise<any>;
}
