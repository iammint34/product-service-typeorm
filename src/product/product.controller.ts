import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { productService } from "./product.service";
import { v4 as uuidv4 } from 'uuid';
import { CreateProduct, UpdateProduct } from "./dto";

@Controller('product')
export class productController {
    constructor(private service: productService) { }

    @Get()
    async handleList() {
        return await this.service.getList();
    }

    @Get(':uuid')
    async handleGetByUuid(@Param() data: { uuid: string }) {
        return await this.service.getByUuid(data.uuid);
    }

    @Post()
    async handleCreateRecord(@Body() dto: CreateProduct) {
        dto.uuid = uuidv4();
        return await this.service.createRecord(dto);
    }

    @Patch(':uuid')
    async handleUpdateRecord(@Param() data: { uuid: string }, @Body() dto: UpdateProduct) {
        return await this.service.updateRecord(data.uuid, dto);
    }

    @Delete('')
    async handleDeleteRecord(@Body() uuids: string[]) {
        return await this.service.deleteRecord(uuids);
    }

}