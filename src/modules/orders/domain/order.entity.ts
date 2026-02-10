export class Order {
  constructor(
    public readonly id: string,
    private status: OrderStatus,
    private total: number,
  ) {}

  markAsPaid() {
    if (this.status !== OrderStatus.PENDING) {
      throw new Error('Order cannot be paid');
    }
    this.status = OrderStatus.PAID;
  }

  getStatus() {
    return this.status;
  }

  getTotal() {
    return this.total;
  }
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
  SHIPPED = 'SHIPPED',
}
