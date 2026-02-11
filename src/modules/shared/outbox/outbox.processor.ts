import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OutboxProcessor {
  constructor(private readonly prisma: PrismaService) {}

  async process() {
    const events = await this.prisma.outboxEvent.findMany({
      where: { processedAt: null },
      take: 10,
      orderBy: { createdAt: 'asc' },
    });

    for (const event of events) {
      console.log('Publishing event:', event.type, event.payload);

      await this.prisma.outboxEvent.update({
        where: { id: event.id },
        data: { processedAt: new Date() },
      });
    }
  }
}
