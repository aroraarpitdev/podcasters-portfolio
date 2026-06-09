import { db, pageContent, testimonials, users } from "./index";
import bcrypt from "bcryptjs";
// @ts-ignore
import pageData from "../../../apps/web/mockApiData.js";

async function seed() {
  console.log("Seeding database...");
  
  try {
    // 1. Seed page content (excluding testimonial cards)
    const { videoCards, textCards, ...testimonialSectionData } = pageData.testimonials;
    const pageContentData = {
      ...pageData,
      testimonials: testimonialSectionData
    };
    
    await db.insert(pageContent).values({
      id: "home",
      content: pageContentData,
    }).onConflictDoUpdate({
      target: pageContent.id,
      set: { content: pageContentData, updatedAt: new Date() }
    });
    
    console.log("✅ Page content seeded successfully.");

    // Seed default admin user
    const passwordHash = await bcrypt.hash("studio123", 10);
    await db.insert(users).values({
      username: "admin",
      passwordHash: passwordHash,
      failedLoginAttempts: 0,
      lockedUntil: null,
    }).onConflictDoUpdate({
      target: users.username,
      set: { passwordHash: passwordHash, failedLoginAttempts: 0, lockedUntil: null }
    });

    console.log("✅ Default admin user seeded successfully.");

    // 2. Seed testimonials
    // Clear existing testimonials
    await db.delete(testimonials);
    
    const textCardsArr = textCards || [];
    const videoCardsArr = videoCards || [];

    const textTestimonialsToInsert = textCardsArr.map((t: any) => ({
      type: 'text' as const,
      author: t.author,
      content: t.cardHeading,
      rating: parseInt(t.rating) || 5,
      category: t.category,
    }));

    const videoTestimonialsToInsert = videoCardsArr.map((v: any) => ({
      type: 'video' as const,
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
      await db.insert(testimonials).values(allTestimonials);
    }
    
    console.log(`✅ Seeded ${allTestimonials.length} testimonials successfully.`);
    console.log("Database seeding completed!");
    
  } catch (error) {
    console.error("Error seeding database:", error);
  }
  process.exit(0);
}

seed();
