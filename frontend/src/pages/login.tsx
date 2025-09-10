import { useMutation } from "@apollo/client/react";
import { LOGIN_USER } from "../graphql/mutations/login";
import { useUserStore } from "../stores/userStore";
import { AuthForm, type AuthValues } from "../components/login-form/auth-form";
import { useNavigate } from "react-router-dom";

type LoginRes = { login: { user: { id: string; email: string } } };

const Login = () => {
	const setUser = useUserStore((s) => s.setUser);
	const [mutate] = useMutation<LoginRes>(LOGIN_USER, {
		fetchPolicy: "no-cache",
	});
	const navigate = useNavigate();

	const onSubmit = async ({ email, password }: AuthValues) => {
		try {
			const { data } = await mutate({ variables: { email, password } });
			if (data?.login?.user) {
				setUser({ ...data.login.user, password: "" });
				navigate("/");
			}
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<div>
			<AuthForm mode="login" title="Login" text="Sign in" onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
