import { useMutation } from "@apollo/client/react";
import { useUserStore } from "../stores/userStore";
import { REGISTER_USER } from "../graphql/mutations/register";
import { AuthForm, type AuthValues } from "../components/login-form/auth-form";
import { useNavigate } from "react-router-dom";

type RegisterRes = { register: { user: { id: string; email: string } } };
const Register = () => {
	const setUser = useUserStore((s) => s.setUser);
	const [mutate] = useMutation<RegisterRes>(REGISTER_USER, {
		fetchPolicy: "no-cache",
	});
	const navigate = useNavigate();

	const onSubmit = async ({ email, password, confirmPassword }: AuthValues) => {
		try {
			const { data } = await mutate({
				variables: { email, password, confirmPassword },
			});
			if (data?.register?.user) {
				setUser({ ...data.register.user, password: "" });
				navigate("/");
			}
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<div>
			<AuthForm
				mode="register"
				title="Register"
				text="Create an account"
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default Register;
