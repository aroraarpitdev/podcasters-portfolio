export declare class CreateTestimonialDto {
    type?: 'text' | 'video';
    author: string;
    brand?: string;
    content: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    cardDirection?: string;
    rating?: number;
    category?: string;
    isFeatured?: boolean;
}
