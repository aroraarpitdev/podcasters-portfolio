import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
export declare class TestimonialsService {
    create(createTestimonialDto: CreateTestimonialDto): Promise<{
        id: string;
        content: string;
        type: "text" | "video";
        author: string;
        brand: string | null;
        videoUrl: string | null;
        thumbnailUrl: string | null;
        cardDirection: string | null;
        rating: number;
        category: string | null;
        isFeatured: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        content: string;
        type: "text" | "video";
        author: string;
        brand: string | null;
        videoUrl: string | null;
        thumbnailUrl: string | null;
        cardDirection: string | null;
        rating: number;
        category: string | null;
        isFeatured: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        content: string;
        type: "text" | "video";
        author: string;
        brand: string | null;
        videoUrl: string | null;
        thumbnailUrl: string | null;
        cardDirection: string | null;
        rating: number;
        category: string | null;
        isFeatured: boolean;
        createdAt: Date;
    }>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<{
        id: string;
        content: string;
        type: "text" | "video";
        author: string;
        brand: string | null;
        videoUrl: string | null;
        thumbnailUrl: string | null;
        cardDirection: string | null;
        rating: number;
        category: string | null;
        isFeatured: boolean;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        content: string;
        type: "text" | "video";
        author: string;
        brand: string | null;
        videoUrl: string | null;
        thumbnailUrl: string | null;
        cardDirection: string | null;
        rating: number;
        category: string | null;
        isFeatured: boolean;
        createdAt: Date;
    }>;
}
