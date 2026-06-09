"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// @ts-ignore
const mockApiData_js_1 = __importDefault(require("../../../apps/web/mockApiData.js"));
async function seed() {
    console.log("Seeding database...");
    try {
        // 1. Seed page content (excluding testimonial cards)
        const { videoCards, textCards, ...testimonialSectionData } = mockApiData_js_1.default.testimonials;
        const pageContentData = {
            ...mockApiData_js_1.default,
            testimonials: testimonialSectionData
        };
        await index_1.db.insert(index_1.pageContent).values({
            id: "home",
            content: pageContentData,
        }).onConflictDoUpdate({
            target: index_1.pageContent.id,
            set: { content: pageContentData, updatedAt: new Date() }
        });
        console.log("✅ Page content seeded successfully.");
        // Seed default admin user
        const passwordHash = await bcryptjs_1.default.hash("studio123", 10);
        await index_1.db.insert(index_1.users).values({
            username: "admin",
            passwordHash: passwordHash,
            failedLoginAttempts: 0,
            lockedUntil: null,
        }).onConflictDoUpdate({
            target: index_1.users.username,
            set: { passwordHash: passwordHash, failedLoginAttempts: 0, lockedUntil: null }
        });
        console.log("✅ Default admin user seeded successfully.");
        // 2. Seed testimonials
        // Clear existing testimonials
        await index_1.db.delete(index_1.testimonials);
        const textCardsArr = textCards || [];
        const videoCardsArr = videoCards || [];
        const textTestimonialsToInsert = textCardsArr.map((t) => ({
            type: 'text',
            author: t.author,
            content: t.cardHeading,
            rating: parseInt(t.rating) || 5,
            category: t.category,
        }));
        const videoTestimonialsToInsert = videoCardsArr.map((v) => ({
            type: 'video',
            author: v.videoAuthor,
            brand: v.authorBrand,
            content: v.testimonial,
            videoUrl: v.videoUrl,
            thumbnailUrl: v.videoThumbnail,
            cardDirection: v.cardDirection,
            category: v.category,
            rating: 5,
        }));
        const allTestimonials = [...textTestimonialsToInsert, ...videoTestimonialsToInsert];
        if (allTestimonials.length > 0) {
            await index_1.db.insert(index_1.testimonials).values(allTestimonials);
        }
        console.log(`✅ Seeded ${allTestimonials.length} testimonials successfully.`);
        console.log("Database seeding completed!");
    }
    catch (error) {
        console.error("Error seeding database:", error);
    }
    process.exit(0);
}
seed();
