import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        id: string;
        username: string;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        createdAt: Date;
    }[]>;
    create(createUserDto: any): Promise<{
        id: string;
        createdAt: Date;
        username: string;
    }>;
    update(id: string, updateUserDto: any): Promise<{
        id: string;
        username: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
