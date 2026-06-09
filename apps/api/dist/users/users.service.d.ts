export declare class UsersService {
    findAll(): Promise<{
        id: string;
        username: string;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        createdAt: Date;
    }[]>;
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        username: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        username: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
