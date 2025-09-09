import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./apolloClient.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={apolloClient}>
			<RouterProvider router={router} />
			<App />
		</ApolloProvider>
	</StrictMode>
);
