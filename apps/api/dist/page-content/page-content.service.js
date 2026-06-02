"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContentService = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("@podcastors/database");
const drizzle_orm_1 = require("drizzle-orm");
let PageContentService = class PageContentService {
    async create(createPageContentDto) {
        const [result] = await database_1.db
            .insert(database_1.pageContent)
            .values({
            id: createPageContentDto.id,
            content: createPageContentDto.content,
        })
            .returning();
        return result;
    }
    async findAll() {
        return database_1.db.select().from(database_1.pageContent);
    }
    async findOne(id) {
        const [result] = await database_1.db
            .select()
            .from(database_1.pageContent)
            .where((0, drizzle_orm_1.eq)(database_1.pageContent.id, id));
        if (!result) {
            throw new common_1.NotFoundException(`Page content with id ${id} not found`);
        }
        return result;
    }
    async update(id, updatePageContentDto) {
        const [result] = await database_1.db
            .update(database_1.pageContent)
            .set({
            content: updatePageContentDto.content,
            updatedAt: new Date(),
        })
            .where((0, drizzle_orm_1.eq)(database_1.pageContent.id, id))
            .returning();
        if (!result) {
            throw new common_1.NotFoundException(`Page content with id ${id} not found`);
        }
        return result;
    }
    async remove(id) {
        const [result] = await database_1.db
            .delete(database_1.pageContent)
            .where((0, drizzle_orm_1.eq)(database_1.pageContent.id, id))
            .returning();
        if (!result) {
            throw new common_1.NotFoundException(`Page content with id ${id} not found`);
        }
        return result;
    }
};
exports.PageContentService = PageContentService;
exports.PageContentService = PageContentService = __decorate([
    (0, common_1.Injectable)()
], PageContentService);
//# sourceMappingURL=page-content.service.js.map