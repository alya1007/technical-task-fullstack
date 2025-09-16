import { Query, Resolver } from '@nestjs/graphql';
import { DealService } from './deal.service';
import { Deal } from './deal.type';

@Resolver()
export class DealResolver {
  constructor(private readonly deals: DealService) {}

  @Query(() => [Deal], { name: 'deals' })
  getDeals(): Promise<Deal[]> {
    return this.deals.findAll();
  }
}
