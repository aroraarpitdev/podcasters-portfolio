import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { db, users } from '@podcastors/database';
import { eq, ne } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  async findAll() {
    const allUsers = await db.select({
      id: users.id,
      username: users.username,
      failedLoginAttempts: users.failedLoginAttempts,
      lockedUntil: users.lockedUntil,
      createdAt: users.createdAt,
    }).from(users);
    return allUsers;
  }

  async create(data: any) {
    const existingUser = await db.select().from(users).where(eq(users.username, data.username));
    if (existingUser.length > 0) {
      throw new BadRequestException('Username already exists');
    }

    const passwordHash = await bcrypt.hash(data.password, 10);
    const [newUser] = await db.insert(users).values({
      username: data.username,
      passwordHash,
    }).returning({
      id: users.id,
      username: users.username,
      createdAt: users.createdAt,
    });

    return newUser;
  }

  async update(id: string, data: any) {
    const targetUser = await db.select().from(users).where(eq(users.id, id));
    if (targetUser.length === 0) {
      throw new NotFoundException('User not found');
    }

    if (data.username && data.username !== targetUser[0].username) {
      const existingUser = await db.select().from(users).where(eq(users.username, data.username));
      if (existingUser.length > 0) {
        throw new BadRequestException('Username already exists');
      }
    }

    const updates: any = {};
    if (data.username) updates.username = data.username;
    if (data.password) updates.passwordHash = await bcrypt.hash(data.password, 10);
    if (data.unlock) {
      updates.failedLoginAttempts = 0;
      updates.lockedUntil = null;
    }

    const [updatedUser] = await db.update(users).set(updates).where(eq(users.id, id)).returning({
      id: users.id,
      username: users.username,
    });

    return updatedUser;
  }

  async remove(id: string) {
    const targetUserRecords = await db.select().from(users).where(eq(users.id, id));
    const targetUser = targetUserRecords[0];

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    if (targetUser.username === 'admin') {
      throw new BadRequestException('Cannot delete the default admin user');
    }

    await db.delete(users).where(eq(users.id, id));
    return { success: true };
  }
}
