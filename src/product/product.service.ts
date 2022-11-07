import { Injectable, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { In, Repository } from "typeorm";

@Injectable({})
export class productService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) { }

    async getList(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async getByUuid(uuid: string): Promise<Product> {
        return await this.productRepository.findOne({ where: { uuid: uuid } });
    }


    async createRecord(data: Partial<Product>): Promise<Product> {
        try {
            return await this.productRepository.save(
                this.productRepository.create(data)
            );
        } catch (error) {
            throw new ForbiddenException('Unable to Save Product');
        }
    }

    async updateRecord(uuid: string, data: Partial<Product>): Promise<Product> {
        try {
            await this.productRepository.update({ uuid: uuid }, data);
            return await this.productRepository.findOne({ where: { uuid: uuid } });
        } catch (error) {
            throw new ForbiddenException('Unable to Save Product');
        }
    }

    async deleteRecord(uuid: string[]) {
        try {
            await this.productRepository.delete({ uuid: In([uuid]) });
            return { deleted_rows: uuid.length };
        } catch (error) {
            throw new ForbiddenException('Unable to Save Product');
        }
    }

}