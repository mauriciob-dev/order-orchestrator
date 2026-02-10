import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { OrderRepository } from '../domain/order.repository';
import { Order, OrderStatus } from '../domain/order.entity';

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async save(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        id: order.id,
        status: order.getStatus(),
        total: order.getTotal(),
      },
    });
  }

  async findById(id: string): Promise<Order | null> {
    const record = await this.prisma.order.findUnique({ where: { id } });

    if (!record) return null;

    return new Order(
      record.id,
      record.status as OrderStatus,
      Number(record.total),
    );
  }
}
