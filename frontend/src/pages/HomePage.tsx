import HomeCard from "../components/HomeCard";
import Snowfall from "react-snowfall";

function HomePage() {
	const useSnow = true;

	return (
		<div>
			<HomeCard />
			{useSnow && (
				<Snowfall
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
					}}
					snowflakeCount={30}
				/>
			)}
		</div>
	);
}
export default HomePage;
