"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@podcastors/database");
const drizzle_orm_1 = require("drizzle-orm");
const bcrypt = __importStar(require("bcryptjs"));
let UsersService = class UsersService {
    async findAll() {
        const allUsers = await database_1.db.select({
            id: database_1.users.id,
            username: database_1.users.username,
            failedLoginAttempts: database_1.users.failedLoginAttempts,
            lockedUntil: database_1.users.lockedUntil,
            createdAt: database_1.users.createdAt,
        }).from(database_1.users);
        return allUsers;
    }
    async create(data) {
        const existingUser = await database_1.db.select().from(database_1.users).where((0, drizzle_orm_1.eq)(database_1.users.username, data.username));
        if (existingUser.length > 0) {
            throw new common_1.BadRequestException('Username already exists');
        }
        const passwordHash = await bcrypt.hash(data.password, 10);
        const [newUser] = await database_1.db.insert(database_1.users).values({
            username: data.username,
            passwordHash,
        }).returning({
            id: database_1.users.id,
            username: database_1.users.username,
            createdAt: database_1.users.createdAt,
        });
        return newUser;
    }
    async update(id, data) {
        const targetUser = await database_1.db.select().from(database_1.users).where((0, drizzle_orm_1.eq)(database_1.users.id, id));
        if (targetUser.length === 0) {
            throw new common_1.NotFoundException('User not found');
        }
        if (data.username && data.username !== targetUser[0].username) {
            const existingUser = await database_1.db.select().from(database_1.users).where((0, drizzle_orm_1.eq)(database_1.users.username, data.username));
            if (existingUser.length > 0) {
                throw new common_1.BadRequestException('Username already exists');
            }
        }
        const updates = {};
        if (data.username)
            updates.username = data.username;
        if (data.password)
            updates.passwordHash = await bcrypt.hash(data.password, 10);
        if (data.unlock) {
            updates.failedLoginAttempts = 0;
            updates.lockedUntil = null;
        }
        const [updatedUser] = await database_1.db.update(database_1.users).set(updates).where((0, drizzle_orm_1.eq)(database_1.users.id, id)).returning({
            id: database_1.users.id,
            username: database_1.users.username,
        });
        return updatedUser;
    }
    async remove(id) {
        const targetUserRecords = await database_1.db.select().from(database_1.users).where((0, drizzle_orm_1.eq)(database_1.users.id, id));
        const targetUser = targetUserRecords[0];
        if (!targetUser) {
            throw new common_1.NotFoundException('User not found');
        }
        if (targetUser.username === 'admin') {
            throw new common_1.BadRequestException('Cannot delete the default admin user');
        }
        await database_1.db.delete(database_1.users).where((0, drizzle_orm_1.eq)(database_1.users.id, id));
        return { success: true };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map