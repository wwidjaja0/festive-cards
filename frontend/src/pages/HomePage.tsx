import HomeCard from "../components/HomeCard";
import Snowfall from "react-snowfall";
import MetaTags from "../components/MetaTags";

function HomePage() {
	const useSnow = true;

	return (
		<div>
			<MetaTags
				title="Festive Cards"
				description="A website to send people endearing cards while also saving paper."
				image="https://em-content.zobj.net/source/apple/81/christmas-tree_1f384.png"
				name="wwidjaja0"
			/>
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
