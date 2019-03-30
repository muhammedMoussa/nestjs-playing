import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { ApiResponse, ApiBearerAuth, ApiUseTags } from '@nestjs/swagger'

import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.iterface'

@ApiUseTags('items')
@ApiBearerAuth()
@Controller('items')

export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}
    @Get()
    getAllItems(): Promise<Item[]> {
        return this.itemService.getAllItems()
    }

    @Get(':id')
    getItemById(@Param('id') id): Promise<Item> {
        return this.itemService.getItemById(id)
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The item has been successfully created.'})

    createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.createItem(createItemDto)
    }

    @Put(':id')
    updateItem(@Body() item: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemService.updateItem(id, item)
    }

    @Delete(':id')
    deletItem(@Param('id') id): Promise<Item> {
        return this.itemService.deleteItem(id)
    }
}

