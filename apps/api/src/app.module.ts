import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PageContentModule } from './page-content/page-content.module';
import { TestimonialsModule } from './testimonials/testimonials.module';

@Module({
  imports: [PageContentModule, TestimonialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
