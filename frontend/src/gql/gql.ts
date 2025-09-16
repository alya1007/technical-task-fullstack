/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tlogin(loginInput: { email: $email, password: $password }) {\n\t\t\tuser {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": typeof types.LoginUserDocument,
    "\n\tmutation LogoutUser {\n\t\tlogout\n\t}\n": typeof types.LogoutUserDocument,
    "\n\tmutation RegisterUser(\n\t\t$email: String!\n\t\t$password: String!\n\t\t$confirmPassword: String!\n\t) {\n\t\tregister(\n\t\t\tregisterInput: {\n\t\t\t\temail: $email\n\t\t\t\tpassword: $password\n\t\t\t\tconfirmPassword: $confirmPassword\n\t\t\t}\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": typeof types.RegisterUserDocument,
    "\n\tquery GetDeals {\n\t\tdeals {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t\tsoldPercent\n\t\t\tticket\n\t\t\tyieldPercent\n\t\t\tdaysLeft\n\t\t\timageUrl\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": typeof types.GetDealsDocument,
};
const documents: Documents = {
    "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tlogin(loginInput: { email: $email, password: $password }) {\n\t\t\tuser {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.LoginUserDocument,
    "\n\tmutation LogoutUser {\n\t\tlogout\n\t}\n": types.LogoutUserDocument,
    "\n\tmutation RegisterUser(\n\t\t$email: String!\n\t\t$password: String!\n\t\t$confirmPassword: String!\n\t) {\n\t\tregister(\n\t\t\tregisterInput: {\n\t\t\t\temail: $email\n\t\t\t\tpassword: $password\n\t\t\t\tconfirmPassword: $confirmPassword\n\t\t\t}\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": types.RegisterUserDocument,
    "\n\tquery GetDeals {\n\t\tdeals {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t\tsoldPercent\n\t\t\tticket\n\t\t\tyieldPercent\n\t\t\tdaysLeft\n\t\t\timageUrl\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.GetDealsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tlogin(loginInput: { email: $email, password: $password }) {\n\t\t\tuser {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation LoginUser($email: String!, $password: String!) {\n\t\tlogin(loginInput: { email: $email, password: $password }) {\n\t\t\tuser {\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LogoutUser {\n\t\tlogout\n\t}\n"): (typeof documents)["\n\tmutation LogoutUser {\n\t\tlogout\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation RegisterUser(\n\t\t$email: String!\n\t\t$password: String!\n\t\t$confirmPassword: String!\n\t) {\n\t\tregister(\n\t\t\tregisterInput: {\n\t\t\t\temail: $email\n\t\t\t\tpassword: $password\n\t\t\t\tconfirmPassword: $confirmPassword\n\t\t\t}\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation RegisterUser(\n\t\t$email: String!\n\t\t$password: String!\n\t\t$confirmPassword: String!\n\t) {\n\t\tregister(\n\t\t\tregisterInput: {\n\t\t\t\temail: $email\n\t\t\t\tpassword: $password\n\t\t\t\tconfirmPassword: $confirmPassword\n\t\t\t}\n\t\t) {\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetDeals {\n\t\tdeals {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t\tsoldPercent\n\t\t\tticket\n\t\t\tyieldPercent\n\t\t\tdaysLeft\n\t\t\timageUrl\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetDeals {\n\t\tdeals {\n\t\t\tid\n\t\t\tname\n\t\t\tprice\n\t\t\tsoldPercent\n\t\t\tticket\n\t\t\tyieldPercent\n\t\t\tdaysLeft\n\t\t\timageUrl\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;