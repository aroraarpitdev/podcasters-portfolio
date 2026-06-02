import { Injectable, NotFoundException } from '@nestjs/common';
import { db, pageContent } from '@podcastors/database';
import { eq } from 'drizzle-orm';
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
    const [result] = await db
      .update(pageContent)
      .set({
        content: updatePageContentDto.content,
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
