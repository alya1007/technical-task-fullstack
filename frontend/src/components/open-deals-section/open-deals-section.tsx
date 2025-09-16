import type { Deal } from "../../gql/graphql";
import DealCard from "./deal-card/deal-card";
import styles from "./open-deals-section.module.css";

type OpenDealsSectionProps = {
	deals: Deal[];
};

const OpenDealsSection = ({ deals }: OpenDealsSectionProps) => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Open Deals</h2>
			<div className={styles.dealsGrid}>
				{deals.map((deal) => (
					<div key={deal.id}>
						<DealCard deal={deal} />
					</div>
				))}
			</div>
		</section>
	);
};

export default OpenDealsSection;
