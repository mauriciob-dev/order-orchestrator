import { Order, OrderStatus } from '../domain/order.entity';
import { OrderRepository } from '../domain/order.repository';
import { randomUUID } from 'crypto';

export class CreateOrderUseCase {
  constructor(private readonly orders: OrderRepository) {}

  async execute(total: number): Promise<Order> {
    const order = new Order(randomUUID(), OrderStatus.PENDING, total);
    await this.orders.save(order);
    return order;
  }
}
