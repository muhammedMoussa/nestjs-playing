import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get All Items'
    }

    @Get(':id')
    findItemById(@Param('id') id): string {
        return `Item: ${id}`
    }

    @Post()
    createItem(@Body() createItemDto: CreateItemDto): string {
        return `Created ${createItemDto.name}!`
    }

}
