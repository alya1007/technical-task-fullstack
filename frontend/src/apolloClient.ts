import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	Observable,
} from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import type { ExecutionResult, GraphQLError } from "graphql";
import { useUserStore } from "./stores/userStore";

const GRAPHQL_URL =
	import.meta.env?.VITE_API_URL ?? "http://localhost:3000/graphql";

const httpLink = new HttpLink({
	uri: GRAPHQL_URL,
	credentials: "include",
});

const errorLink = new ApolloLink((operation, forward) => {
	if (!forward) {
		return new Observable<ExecutionResult>((observer) => observer.complete());
	}

	return new Observable<ExecutionResult>((observer) => {
		const sub = forward(operation).subscribe({
			next: (response) => {
				const errors = (response.errors ?? []) as readonly GraphQLError[];
				for (const err of errors) {
					if (err?.extensions?.code === "UNAUTHENTICATED") {
						useUserStore.setState({ id: undefined, email: undefined });
					}
				}
				observer.next(response as ExecutionResult);
			},
			error: (err) => observer.error(err),
			complete: () => observer.complete(),
		});

		return () => sub.unsubscribe();
	});
});

export const apolloClient = new ApolloClient({
	link: ApolloLink.from([errorLink, httpLink]),
	cache: new InMemoryCache(),
});
