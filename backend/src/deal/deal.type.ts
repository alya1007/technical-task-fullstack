import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Deal {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price!: number;

  @Field(() => Float)
  ticket!: number;

  @Field(() => Float)
  yieldPercent!: number;

  @Field(() => Int)
  daysLeft!: number;

  @Field(() => Float)
  soldPercent!: number;

  @Field()
  imageUrl!: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
