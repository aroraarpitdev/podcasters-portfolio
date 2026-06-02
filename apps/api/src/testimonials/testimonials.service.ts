import { Injectable, NotFoundException } from '@nestjs/common';
import { db, testimonials } from '@podcastors/database';
import { eq } from 'drizzle-orm';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {
  async create(createTestimonialDto: CreateTestimonialDto) {
    const [result] = await db
      .insert(testimonials)
      .values({
        type: createTestimonialDto.type ?? 'text',
        author: createTestimonialDto.author,
        brand: createTestimonialDto.brand,
        content: createTestimonialDto.content,
        videoUrl: createTestimonialDto.videoUrl,
        thumbnailUrl: createTestimonialDto.thumbnailUrl,
        cardDirection: createTestimonialDto.cardDirection,
        rating: createTestimonialDto.rating ?? 5,
        category: createTestimonialDto.category,
        isFeatured: createTestimonialDto.isFeatured ?? false,
      })
      .returning();
    return result;
  }

  async findAll() {
    return db.select().from(testimonials);
  }

  async findOne(id: string) {
    const [result] = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.id, id));
      
    if (!result) {
      throw new NotFoundException(`Testimonial with id ${id} not found`);
    }
    return result;
  }

  async update(id: string, updateTestimonialDto: UpdateTestimonialDto) {
    const [result] = await db
      .update(testimonials)
      .set({
        ...updateTestimonialDto,
      })
      .where(eq(testimonials.id, id))
      .returning();

    if (!result) {
      throw new NotFoundException(`Testimonial with id ${id} not found`);
    }
    return result;
  }

  async remove(id: string) {
    const [result] = await db
      .delete(testimonials)
      .where(eq(testimonials.id, id))
      .returning();
      
    if (!result) {
      throw new NotFoundException(`Testimonial with id ${id} not found`);
    }
    return result;
  }
}
