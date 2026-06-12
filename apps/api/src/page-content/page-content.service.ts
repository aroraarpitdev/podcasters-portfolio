import { Injectable, NotFoundException } from '@nestjs/common';
import { db, pageContent, testimonials } from '@podcastors/database';
import { eq, notInArray } from 'drizzle-orm';
import { CreatePageContentDto } from './dto/create-page-content.dto';
import { UpdatePageContentDto } from './dto/update-page-content.dto';

@Injectable()
export class PageContentService {
  async create(createPageContentDto: CreatePageContentDto) {
    const [result] = await db
      .insert(pageContent)
      .values({
        id: createPageContentDto.id,
        content: createPageContentDto.content,
      })
      .returning();
    return result;
  }

  async findAll() {
    return db.select().from(pageContent);
  }

  async findOne(id: string) {
    const [result] = await db
      .select()
      .from(pageContent)
      .where(eq(pageContent.id, id));
      
    if (!result) {
      throw new NotFoundException(`Page content with id ${id} not found`);
    }
    return result;
  }

  async update(id: string, updatePageContentDto: UpdatePageContentDto) {
    const payloadContent = updatePageContentDto.content as any;

    if (payloadContent?.testimonials) {
      const { videoCards = [], textCards = [], ...testimonialSectionData } = payloadContent.testimonials;
      
      const allCards = [...videoCards, ...textCards];
      const payloadIds = allCards.map((t) => t.id).filter(Boolean);

      // 1. Delete removed testimonials
      if (payloadIds.length > 0) {
        await db.delete(testimonials).where(notInArray(testimonials.id, payloadIds));
      } else {
        await db.delete(testimonials);
      }

      const newTestimonials = [];
      const updateTestimonials = [];

      // Process Text Cards
      for (const t of textCards) {
        const mapped = {
          type: 'text' as const,
          author: t.author,
          content: t.cardHeading,
          rating: parseInt(t.rating) || 5,
          category: t.category,
        };
        if (t.id) updateTestimonials.push({ ...mapped, id: t.id });
        else newTestimonials.push(mapped);
      }

      // Process Video Cards
      for (const v of videoCards) {
        const mapped = {
          type: 'video' as const,
          author: v.videoAuthor,
          brand: v.authorBrand,
          content: v.testimonial,
          videoUrl: v.videoUrl,
          thumbnailUrl: v.videoThumbnail,
          cardDirection: v.cardDirection,
          category: v.category,
          rating: 5,
        };
        if (v.id) updateTestimonials.push({ ...mapped, id: v.id });
        else newTestimonials.push(mapped);
      }

      // 2. Insert new testimonials
      if (newTestimonials.length > 0) {
        await db.insert(testimonials).values(newTestimonials);
      }

      // 3. Update existing testimonials
      if (updateTestimonials.length > 0) {
        await Promise.all(
          updateTestimonials.map((t) =>
            db.update(testimonials).set(t).where(eq(testimonials.id, t.id))
          )
        );
      }

      // Remove array data from the page content payload so we don't store it twice
      payloadContent.testimonials = testimonialSectionData;
    }

    const [result] = await db
      .update(pageContent)
      .set({
        content: payloadContent,
        updatedAt: new Date(),
      })
      .where(eq(pageContent.id, id))
      .returning();

    if (!result) {
      throw new NotFoundException(`Page content with id ${id} not found`);
    }
    return result;
  }

  async remove(id: string) {
    const [result] = await db
      .delete(pageContent)
      .where(eq(pageContent.id, id))
      .returning();
      
    if (!result) {
      throw new NotFoundException(`Page content with id ${id} not found`);
    }
    return result;
  }
}
