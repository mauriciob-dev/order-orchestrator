import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { PrismaOrderRepository } from './infrastructure/prisma-order.repository';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [PrismaService, PrismaOrderRepository],
})
export class OrdersModule {}
