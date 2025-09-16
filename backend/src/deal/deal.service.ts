import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Deal as DealGql } from './deal.type';
import { PrismaService } from 'src/prisma.service';

const toNum = (d: Prisma.Decimal | number) =>
  typeof d === 'number' ? d : d.toNumber();

@Injectable()
export class DealService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<DealGql[]> {
    const rows = await this.prisma.deal.findMany({
      orderBy: { name: 'asc' },
    });

    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      price: toNum(r.price),
      ticket: toNum(r.ticket),
      yieldPercent: r.yieldPercent,
      daysLeft: r.daysLeft,
      soldPercent: r.soldPercent,
      imageUrl: r.imageUrl,
    }));
  }
}
