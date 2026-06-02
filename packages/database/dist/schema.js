"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonials = exports.pageContent = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.pageContent = (0, pg_core_1.pgTable)("page_content", {
    id: (0, pg_core_1.text)("id").primaryKey(), // e.g., 'home'
    content: (0, pg_core_1.jsonb)("content").notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
});
exports.testimonials = (0, pg_core_1.pgTable)("testimonials", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    type: (0, pg_core_1.text)("type", { enum: ['text', 'video'] }).notNull().default('text'),
    author: (0, pg_core_1.text)("author").notNull(),
    brand: (0, pg_core_1.text)("brand"),
    content: (0, pg_core_1.text)("content").notNull(),
    videoUrl: (0, pg_core_1.text)("video_url"),
    thumbnailUrl: (0, pg_core_1.text)("thumbnail_url"),
    cardDirection: (0, pg_core_1.text)("card_direction"),
    rating: (0, pg_core_1.integer)("rating").default(5).notNull(),
    category: (0, pg_core_1.text)("category"),
    isFeatured: (0, pg_core_1.boolean)("is_featured").default(false).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
