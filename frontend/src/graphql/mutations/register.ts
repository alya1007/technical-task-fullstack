import { graphql } from "../../gql";
export const REGISTER_USER = graphql(`
	mutation RegisterUser(
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			user {
				id
				email
			}
		}
	}
`);
