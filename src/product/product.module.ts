import { Module } from '@nestjs/common';
import { productController } from './product.controller';
import { productService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
    ],
    controllers: [productController],
    providers: [productService]
})
export class productModule {}