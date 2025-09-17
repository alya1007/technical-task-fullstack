import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";
const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:3000/graphql",
	documents: ["src/**/*.{ts,tsx,gql,graphql}", "!src/gql/**"],
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
		},
	},
};
export default config;
