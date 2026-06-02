import { pgTable, uuid, text, jsonb, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const pageContent = pgTable("page_content", {
  id: text("id").primaryKey(), // e.g., 'home'
  content: jsonb("content").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: uuid("id").primaryKey().defaultRandom(),
  author: text("author").notNull(),
  brand: text("brand"),
  content: text("content").notNull(),
  videoUrl: text("video_url"),
  rating: integer("rating").default(5).notNull(),
  category: text("category"),
  isFeatured: boolean("is_featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
