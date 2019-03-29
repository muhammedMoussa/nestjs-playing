import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.iterface'

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

