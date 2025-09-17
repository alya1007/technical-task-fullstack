import { graphql } from "../../gql";

export const GET_DEALS = graphql(`
	query GetDeals {
		deals {
			id
			name
			price
			soldPercent
			ticket
			yieldPercent
			daysLeft
			imageUrl
			createdAt
			updatedAt
		}
	}
`);
