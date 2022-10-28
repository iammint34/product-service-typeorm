import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { productService } from "./product.service";
import { v4 as uuidv4 } from 'uuid';
import { Product } from "./dto";

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
    async handleCreateRecord(@Body() dto: Product) {
        dto.uuid = uuidv4();
        return await this.service.createRecord(dto);
    }

    @Patch(':uuid')
    async handleUpdateRecord(@Param() data: { uuid: string }, @Body() dto: Product) {
        return await this.service.updateRecord(data.uuid, dto);
    }

    @Patch('/status/active')
    async handleUpdateStatusToActive(@Body() uuids: string[]) {
        return await this.service.updateStatusToActive(uuids);
    }

    @Patch('/status/inactive')
    async handleUpdateStatusToInactive(@Body() uuids: string[]) {
        return await this.service.updateStatusToInactive(uuids);
    }

    @Delete('')
    async handleDeleteRecord(@Body() uuids: string[]) {
        return await this.service.deleteRecord(uuids);
    }

}