import HomeCard from "../components/HomeCard";
import Snowfall from "react-snowfall";

function HomePage() {
	const useSnow = true;

	return (
		<div>
			<HomeCard />
			{useSnow && <Snowfall snowflakeCount={30} />}
		</div>
	);
}
export default HomePage;
