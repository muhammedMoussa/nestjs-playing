import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.iterface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}
    @Get()
    getAllItems(): Item[] {
        return this.itemService.getAllItems()
    }

    @Get(':id')
    findItemById(@Param('id') id): Item {
        return this.itemService.getItemById(id)
    }

    @Post()
    createItem(@Body() createItemDto: CreateItemDto): string {
        return `Created ${createItemDto.name}!`
    }

    @Put(':id')
    updateItem(@Body() item: CreateItemDto, @Param('id') id): string {
        return `Updated: (${id}) - ${item.name}`
    }

    @Delete(':id')
    deletItem(@Param('id') id): string {
        return `Deleted: ${id}`
    }

}
