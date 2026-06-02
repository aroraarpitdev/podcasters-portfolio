import { db, pageContent, testimonials } from "./index";
// @ts-ignore
import pageData from "../../../apps/web/mockApiData.js";

async function seed() {
  console.log("Seeding database...");
  
  try {
    // 1. Seed page content (excluding testimonials)
    const { testimonials: mockTestimonials, ...restPageData } = pageData;
    
    await db.insert(pageContent).values({
      id: "home",
      content: restPageData,
    }).onConflictDoUpdate({
      target: pageContent.id,
      set: { content: restPageData, updatedAt: new Date() }
    });
    
    console.log("✅ Page content seeded successfully.");

    // 2. Seed testimonials
    // Clear existing testimonials
    await db.delete(testimonials);
    
    const textCards = mockTestimonials.textCards || [];
    const videoCards = mockTestimonials.videoCards || [];

    const textTestimonialsToInsert = textCards.map((t: any) => ({
      type: 'text' as const,
      author: t.author,
      content: t.cardHeading,
      rating: parseInt(t.rating) || 5,
      category: t.category,
    }));

    const videoTestimonialsToInsert = videoCards.map((v: any) => ({
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
