"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialsService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@podcastors/database");
const drizzle_orm_1 = require("drizzle-orm");
let TestimonialsService = class TestimonialsService {
    async create(createTestimonialDto) {
        const [result] = await database_1.db
            .insert(database_1.testimonials)
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
        return database_1.db.select().from(database_1.testimonials);
    }
    async findOne(id) {
        const [result] = await database_1.db
            .select()
            .from(database_1.testimonials)
            .where((0, drizzle_orm_1.eq)(database_1.testimonials.id, id));
        if (!result) {
            throw new common_1.NotFoundException(`Testimonial with id ${id} not found`);
        }
        return result;
    }
    async update(id, updateTestimonialDto) {
        const [result] = await database_1.db
            .update(database_1.testimonials)
            .set({
            ...updateTestimonialDto,
        })
            .where((0, drizzle_orm_1.eq)(database_1.testimonials.id, id))
            .returning();
        if (!result) {
            throw new common_1.NotFoundException(`Testimonial with id ${id} not found`);
        }
        return result;
    }
    async remove(id) {
        const [result] = await database_1.db
            .delete(database_1.testimonials)
            .where((0, drizzle_orm_1.eq)(database_1.testimonials.id, id))
            .returning();
        if (!result) {
            throw new common_1.NotFoundException(`Testimonial with id ${id} not found`);
        }
        return result;
    }
};
exports.TestimonialsService = TestimonialsService;
exports.TestimonialsService = TestimonialsService = __decorate([
    (0, common_1.Injectable)()
], TestimonialsService);
//# sourceMappingURL=testimonials.service.js.map