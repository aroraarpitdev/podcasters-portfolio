import { AuthService } from './auth.service';
import { Response, Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(signInDto: Record<string, any>, res: Response): Promise<{
        success: boolean;
        access_token: string;
    }>;
    verify(req: Request): Promise<{
        authenticated: boolean;
        user?: undefined;
    } | {
        authenticated: boolean;
        user: any;
    }>;
    logout(res: Response): Promise<{
        success: boolean;
    }>;
}
