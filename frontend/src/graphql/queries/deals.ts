import { gql } from "@apollo/client";

export const GET_DEALS = gql`
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
`;
