import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.buttonsContainer}>
				<Link to="/login" className={styles.buttonLinkPrimary}>
					Log In
				</Link>
				<Link to="/register" className={styles.buttonLinkSecondary}>
					Sign Up
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
