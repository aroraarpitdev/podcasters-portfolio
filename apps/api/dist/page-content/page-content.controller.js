"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContentController = void 0;
const common_1 = require("@nestjs/common");
const page_content_service_1 = require("./page-content.service");
const create_page_content_dto_1 = require("./dto/create-page-content.dto");
const update_page_content_dto_1 = require("./dto/update-page-content.dto");
let PageContentController = class PageContentController {
    pageContentService;
    constructor(pageContentService) {
        this.pageContentService = pageContentService;
    }
    create(createPageContentDto) {
        return this.pageContentService.create(createPageContentDto);
    }
    findAll() {
        return this.pageContentService.findAll();
    }
    findOne(id) {
        return this.pageContentService.findOne(id);
    }
    update(id, updatePageContentDto) {
        return this.pageContentService.update(id, updatePageContentDto);
    }
    remove(id) {
        return this.pageContentService.remove(id);
    }
};
exports.PageContentController = PageContentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_page_content_dto_1.CreatePageContentDto]),
    __metadata("design:returntype", void 0)
], PageContentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PageContentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PageContentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_page_content_dto_1.UpdatePageContentDto]),
    __metadata("design:returntype", void 0)
], PageContentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PageContentController.prototype, "remove", null);
exports.PageContentController = PageContentController = __decorate([
    (0, common_1.Controller)('page-content'),
    __metadata("design:paramtypes", [page_content_service_1.PageContentService])
], PageContentController);
//# sourceMappingURL=page-content.controller.js.map