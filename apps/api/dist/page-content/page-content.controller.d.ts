import { PageContentService } from './page-content.service';
import { CreatePageContentDto } from './dto/create-page-content.dto';
import { UpdatePageContentDto } from './dto/update-page-content.dto';
export declare class PageContentController {
    private readonly pageContentService;
    constructor(pageContentService: PageContentService);
    create(createPageContentDto: CreatePageContentDto): Promise<{
        id: string;
        content: unknown;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        content: unknown;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        content: unknown;
        updatedAt: Date;
    }>;
    update(id: string, updatePageContentDto: UpdatePageContentDto): Promise<{
        id: string;
        content: unknown;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        content: unknown;
        updatedAt: Date;
    }>;
}
