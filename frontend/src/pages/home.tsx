import { useQuery } from "@apollo/client/react";
import HeroSection from "../components/hero-section/hero-section";
import OpenDealsSection from "../components/open-deals-section/open-deals-section";
import { GET_DEALS } from "../graphql/queries/deals";
import type { GetDealsQueryResult } from "../gql/graphql";

const Home = () => {
	const { data, loading, error } = useQuery<GetDealsQueryResult>(GET_DEALS, {
		fetchPolicy: "cache-and-network",
	});

	if (loading) return <p>Loading…</p>;
	if (error) return <p>Error: {error.message}</p>;

	const deals = data?.deals ?? [];

	return (
		<div>
			<HeroSection />
			<OpenDealsSection deals={deals} />
		</div>
	);
};

export default Home;
