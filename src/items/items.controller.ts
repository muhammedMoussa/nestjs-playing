import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get All Items'
    }

    @Post()
    createItem(@Body() createItemDto: CreateItemDto): string {
        return `Created ${createItemDto.name}!`
    }

}
