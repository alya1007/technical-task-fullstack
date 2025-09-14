import { Button } from "../ui/button/button";
import styles from "./hero-section.module.css";

const HeroSection = () => {
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>The chemical negatively charged</h1>
			<p className={styles.subtitle}>
				Numerous calculations predict, and experiments confirm, that the force
				field reflects the beam, while the mass defect is not formed. The
				chemical compound is negatively charged. While the mass defect is.
			</p>
			<Button variant="ghost">Get Started</Button>
		</section>
	);
};

export default HeroSection;
