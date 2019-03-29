import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Item } from './interfaces/item.iterface'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item> ) {}

    async getAllItems(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async getItemById(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id});
    }

    async createItem(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async updateItem(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true })
    }
    async deleteItem(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id)
    }
}
