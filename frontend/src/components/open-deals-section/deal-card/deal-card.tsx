import type { Deal } from "../../../gql/graphql";
import styles from "./deal-card.module.css";

type DealCardProps = {
	deal: Deal;
};

const formatSpaced = (value: number | string) => {
	const n = typeof value === "string" ? Number(value) : value;
	if (!Number.isFinite(n)) return "";
	return new Intl.NumberFormat("ru-RU", {
		maximumFractionDigits: 0,
	}).format(n);
};

const DealCard = ({ deal }: DealCardProps) => {
	const apiUrl = import.meta.env?.VITE_API_URL_BASE ?? "http://localhost:3000";
	const imageUrl = deal.imageUrl
		? `${apiUrl}${deal.imageUrl}`
		: `${apiUrl}/default-deal.jpg`;
	return (
		<div
			className={styles.dealCard}
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<h3 className={styles.name}>{deal.name}</h3>
			<div className={styles.dealInfoGrid}>
				<p>{formatSpaced(deal.price)} Dhs</p>
				<p>Yield {deal.yieldPercent}%</p>
				<p>Sold {deal.soldPercent}%</p>
				<p>Ticket - {formatSpaced(deal.ticket)} Dhs</p>
				<p>Days left {deal.daysLeft}</p>
			</div>
		</div>
	);
};

export default DealCard;
