import { pgTable, uuid, text, jsonb, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const pageContent = pgTable("page_content", {
  id: text("id").primaryKey(), // e.g., 'home'
  content: jsonb("content").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: text("type", { enum: ['text', 'video'] }).notNull().default('text'),
  author: text("author").notNull(),
  brand: text("brand"),
  content: text("content").notNull(),
  videoUrl: text("video_url"),
  thumbnailUrl: text("thumbnail_url"),
  cardDirection: text("card_direction"),
  rating: integer("rating").default(5).notNull(),
  category: text("category"),
  isFeatured: boolean("is_featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  failedLoginAttempts: integer("failed_login_attempts").default(0).notNull(),
  lockedUntil: timestamp("locked_until"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
