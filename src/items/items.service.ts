import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.iterface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '1',
            name: 'Item 1',
            description: 'Its Item 1',
            qyt: 1
        },
        {
            id: '',
            name: 'Item 2',
            description: 'Its Item 1',
            qyt: 20
        }
    ]

    getAllItems(): Item[] {
        return this.items
    }

    getItemById(id: string): Item {
        return this.items.find(item => item.id === id)
    }
}
