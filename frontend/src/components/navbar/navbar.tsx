import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { useUserStore } from "../../stores/userStore";

const Navbar = () => {
	const { id, email } = useUserStore();
	const isLoggedIn = Boolean(id && email);
	return (
		<nav className={styles.nav}>
			<div className={styles.buttonsContainer}>
				{isLoggedIn ? (
					<p className={styles.welcome}>{email}</p>
				) : (
					<>
						<Link to="/login" className={styles.buttonLinkPrimary}>
							Log In
						</Link>
						<Link to="/register" className={styles.buttonLinkSecondary}>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
