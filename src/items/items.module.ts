import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

import { ItemsController } from '../items/items.controller'
import { ItemsService } from '../items/items.service'
import { ItemSchema } from './schemas/item.schema'

@Module({
  imports: [ MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema}]) ],
  controllers: [ItemsController],
  providers: [ItemsService],
})

export class ItemsModule {}
