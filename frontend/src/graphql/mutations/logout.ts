import { graphql } from "../../gql";
export const LOGOUT_USER = graphql(`
	mutation LogoutUser {
		logout
	}
`);
