import styles from "./navbar.module.css";
import { useUserStore } from "../../stores/userStore";
import { Button } from "../ui/button/button";
import { LOGOUT_USER } from "../../graphql/mutations/logout";
import { useMutation } from "@apollo/client/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const { id, email } = useUserStore();
	const isLoggedIn = Boolean(id && email);

	const [mutate] = useMutation(LOGOUT_USER, {
		fetchPolicy: "no-cache",
	});
	const navigate = useNavigate();
	const handleLogout = async () => {
		try {
			await mutate();
			useUserStore.getState().clearUser();
			navigate("/");
		} catch (error) {
			console.error("Logout error:", error);
		}
	};
	return (
		<nav className={styles.nav}>
			<div
				className={`${styles.buttonsContainer} ${
					!isLoggedIn && styles.multipleButtons
				}`}
			>
				{isLoggedIn ? (
					<>
						<p className={styles.welcome}>{email}</p>
						<Button as="button" onClick={handleLogout}>
							Logout
						</Button>
					</>
				) : (
					<>
						<Button to="/login" as="link">
							Log In
						</Button>
						<Button to="/register" as="link" variant="secondary">
							Sign Up
						</Button>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
