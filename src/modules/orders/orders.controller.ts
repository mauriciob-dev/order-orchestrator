import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderUseCase } from './application/create-order.usecase';
import { PrismaOrderRepository } from './infrastructure/prisma-order.repository';
import { CreateOrderDto } from './application/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly repo: PrismaOrderRepository) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    const useCase = new CreateOrderUseCase(this.repo);
    return useCase.execute(dto.total);
  }
}
