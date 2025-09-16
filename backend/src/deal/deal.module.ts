import { Module } from '@nestjs/common';
import { DealResolver } from './deal.resolver';
import { DealService } from './deal.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DealResolver, DealService, PrismaService],
})
export class DealModule {}
