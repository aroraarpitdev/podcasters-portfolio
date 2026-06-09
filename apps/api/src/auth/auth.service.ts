import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { db, users } from '@podcastors/database';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(username: string, pass: string) {
    const userRecords = await db.select().from(users).where(eq(users.username, username));
    const user = userRecords[0];

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check lockout status
    if (user.lockedUntil && new Date() < new Date(user.lockedUntil)) {
      throw new ForbiddenException('Account temporarily locked. Please try again later.');
    }

    const isMatch = await bcrypt.compare(pass, user.passwordHash);

    if (!isMatch) {
      // Increment failed attempts
      const newAttempts = user.failedLoginAttempts + 1;
      const updates: any = { failedLoginAttempts: newAttempts };

      if (newAttempts >= 3) {
        // Lock for 1 hour
        const unlockTime = new Date();
        unlockTime.setHours(unlockTime.getHours() + 1);
        updates.lockedUntil = unlockTime;
      }

      await db.update(users).set(updates).where(eq(users.id, user.id));

      if (newAttempts >= 3) {
         throw new ForbiddenException('Account locked due to too many failed attempts.');
      }
      throw new UnauthorizedException('Invalid credentials');
    }

    // Success - reset attempts
    await db.update(users).set({
      failedLoginAttempts: 0,
      lockedUntil: null,
    }).where(eq(users.id, user.id));

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async verifyToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token);
      return { valid: true, payload };
    } catch {
      return { valid: false };
    }
  }
}
